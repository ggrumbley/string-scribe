const _ = require('lodash');

const { History, Song } = require('../models');

exports.index = async (req, res) => {
  try {
    const userId = req.user.id;
    const histories = await History
      .findAll({
        where: { UserId: userId },
        include: [ { model: Song } ],
        order: [ ['createdAt', 'DESC'] ]
      })
      .map(history => history.toJSON())
      .map(history => _.extend(
        {},
        history.Song,
        history
      ));
    res.send(_.uniqBy(histories, history => history.SongId));
  } catch (err) {
    res.status(500).send({ error: 'an error has occured trying to fetch the history' });
  }
};

exports.post = async (req, res) => {
  try {
    const userId = req.user.id;
    const {songId} = req.body;
    const history = await History.create({
      SongId: songId,
      UserId: userId
    });
    res.send(history);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'an error has occured trying to create the history object' });
  }
};

