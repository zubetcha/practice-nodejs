import { Router } from 'express';

import { Cat } from './cats.model';

const router = Router();

//* READ 고양이 데이터 전체 조회
router.get('/cats', (req, res) => {
  try {
    const cats = Cat;

    res.status(200).send({ success: true, data: { cats } });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* READ 특정 고양이 데이터 조회
router.get('/cats/:id', (req, res) => {
  1;
  try {
    const params = req.params;
    const cat = Cat.find((cat) => cat.id === parseInt(params.id));

    res.status(200).send({ success: true, data: { cat: cat } });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* CREATE 새로운 고양이 추가
router.post('/cats', (req, res) => {
  try {
    const data = req.body;
    const newCat = { id: Cat.length + 1, ...data };
    Cat.push({ id: Cat.length + 1, ...data });

    res.status(200).send({ success: true, data: { cat: newCat } });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* UPDATE 고양이 데이터 업데이트 -> PUT
router.put('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const data = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === parseInt(params.id)) {
        cat = { id: cat.id, ...data };
        result = cat;
      }
    });

    res.status(200).send({ success: true, data: { cat: result } });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
router.patch('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const data = req.body;
    let result;

    Cat.forEach((cat) => {
      if (cat.id === parseInt(params.id)) {
        cat = { ...cat, ...data };
        result = cat;
      }
    });

    res.status(200).send({ success: true, data: { cat: result } });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* UPDATE 고양이 데이터 삭제 -> DELETE
router.delete('/cats/:id', (req, res) => {
  try {
    const params = req.params;
    const cat = Cat.find(({ id }) => id === parseInt(params.id));
    const newCat = Cat.filter((cat) => cat.id !== parseInt(params.id));

    res.status(200).send({ success: true, data: { cat } });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

export default router;
