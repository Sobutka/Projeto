import { Router } from 'express'
import { ConsultaController } from './controllers/ConsultaController'
import { PacienteController } from './controllers/PacienteController'
import { DentistaController } from './controllers/DentistaController'

const routes = Router()

routes.post('/consulta/', new ConsultaController().create)
routes.post('/paciente', new PacienteController().create)
routes.post('/dentista', new DentistaController().create)
routes.get('/paciente', new PacienteController().list)
routes.get('/paciente/:codPac', new PacienteController().listId)
routes.put('/paciente/:codPac', new PacienteController().update)
routes.delete('/paciente/:codPac', new PacienteController().delete)
routes.get('/dentista', new DentistaController().list)
routes.get('/dentista/:codDent', new DentistaController().listId)
routes.put('/dentista/:codDent', new DentistaController().update)
routes.delete('/dentista/:codDent', new DentistaController().delete)
routes.get('/consulta', new ConsultaController().list)
routes.put('/consulta/:codCons', new ConsultaController().listId)
routes.put('/consulta/:codCons', new ConsultaController().update)
routes.delete('/consulta/:codCons', new ConsultaController().delete)
export default routes