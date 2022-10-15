import { Router } from 'express'
import { ConsultaController } from './controllers/ConsultaController'
import { PacienteController } from './controllers/PacienteController'
import { DentistaController } from './controllers/DentistaController'

const routes = Router()

routes.post('/consulta/', new ConsultaController().create)
routes.post('/paciente', new PacienteController().create)
routes.post('/dentista', new DentistaController().create)
routes.get('/consulta', new ConsultaController().list)

export default routes