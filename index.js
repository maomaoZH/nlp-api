const {send, text} = require('micro')
const corenlp = require("corenlp-request-wrapper");


module.exports = async (req, res) => {
  const txt = await text(req, { encoding: 'utf8' });
  console.log(txt);

  // CoreNLP Server was lunched here with the french props file on port 9000 
  corenlp.parse(
    txt,
    9000,
    "pos,lemma",
    "json",
    (err, parsedText) => {
      send(res, 201, parsedText);
    }
  );
}