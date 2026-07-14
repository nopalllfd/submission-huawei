import { forms } from '../data/forms.js';

export const getForms = (req, res) => {
  res.status(200).json(forms);
};

export const createForm = (req, res) => {
  forms.push(req.body);

  res.status(201).json({
    message: 'Data berhasil disimpan',
    data: req.body,
  });
};
