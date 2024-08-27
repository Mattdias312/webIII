const tempreturaModel = require('../model/TemperaturaModel')
const temp = new tempreturaModel()

exports.Send = ((req, resp) => {
    var result = temperature.Converter(req.body.type, req.body.temperature)
      resp.render("temperatura/temperaturaListView", { newTemp: result })
  })
  
  exports.Convert = ((req, resp) => {
      resp.render("temperatura/temperaturaFormView")
  })