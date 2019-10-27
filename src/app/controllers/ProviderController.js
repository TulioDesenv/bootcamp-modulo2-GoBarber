import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const provideres = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(provideres);
  }
}

export default new ProviderController();
