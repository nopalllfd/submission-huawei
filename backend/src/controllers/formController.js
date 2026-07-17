import { forms } from '../data/forms.js';

export const getForms = (req, res) => {
  res.status(200).json(forms);
};

export const createForm = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Semua field wajib diisi",
    });
  }

  forms.push({ name, email, message });

  res.status(201).json({
    message: "Data berhasil disimpan",
    data: { name, email, message },
  });
};