import shortId from 'shortid';
import { Request, response, Response } from 'express';
import { config } from '../config/Constante';
import { URLModel } from '../database/model/URL';

export class URLController {
  public async short(req: Request, res: Response): Promise<void> {
    const { URLOrigin } = req.body;
    const url = await URLModel.findOne({ URLOrigin });
    if (url) {
      response.json(url);
      return;
    }
    const hash = shortId.generate();
    const shortURL = `${config.API_URL}/${hash}`;
    const newURL = await URLModel.create({ hash, shortURL, URLOrigin });
    res.json(newURL);
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    const { hash } = req.params;
    const url = await URLModel.findOne({ hash });

    if (url) {
      res.redirect(url.URLOrigin);
      return;
    }
    res.status(400).json({ error: 'URL não encontrada' });
    response.redirect('');
  }
}
