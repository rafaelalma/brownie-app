import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import { Box, SxProps } from '@mui/material'

const dividerStyles: SxProps = {
  mt: 2,
  mb: 2,
}

export default function HomeView() {
  return (
    <>
      <Typography
        variant="h1"
        fontSize={30}
        fontWeight={500}
        textAlign="center"
        padding={2}
      >
        MÓDULO DE GUARDERÍA
      </Typography>
      <Container>
        <Typography variant="body2" gutterBottom>
          Bienvenid@ al Módulo de Guardería.
        </Typography>
        <Typography variant="body2" gutterBottom>
          En el Módulo de Guardería (o Cachorros) tenemos perros desde los 4
          meses hasta los 2/3 años de edad. Son los perros más “adoptables” del
          refugio, pero también son los que más devuelven una vez que crecen y
          la gente no sabe educarlos. Aún así, tenemos muy pocas “devoluciones”,
          y esto es gracias a todo el trabajo comprometido y bien hecho de los
          voluntarios que componen el módulo.
        </Typography>
        <Typography variant="body2" gutterBottom>
          A continuación encontrarás una breve guía sobre el funcionamiento del
          Módulo y la App (donde tenemos toda la información).
        </Typography>

        <Divider variant="middle" sx={dividerStyles} />

        <Typography variant="body1" fontWeight={500} gutterBottom>
          Coordinación
        </Typography>
        <Typography variant="body2" gutterBottom>
          La coordinadora es la responsable del Módulo ante la Junta Directiva,
          Trabajadores y Equipo Veterinario. Ella os dará las indicaciones
          “especiales” en cada turno si las hubiera (reubicaciones, tener que
          sacar perros a clínica…) y solucionará todos los problemas que surjan
          durante los turnos y fuera de ellos.
        </Typography>
        <Typography variant="body2" gutterBottom>
          En cada Módulo hay tres coordinadores, pero, por circunstancias
          excepcionales, en Cachorros, de momento, solo hay una:
        </Typography>
        <Typography variant="body2" fontWeight={500} gutterBottom>
          Laura Guerrero{' '}
          <Link
            href="tel:633518657"
            variant="body2"
            fontWeight={500}
            underline="none"
          >
            (633 51 86 57)
          </Link>
        </Typography>
        <Typography variant="body2" gutterBottom>
          Al haber solo una coordinadora se establece un horario de coordinación
          para no sobrecargarla las 24h. Dentro de este horario podéis hablar
          con ella sin problema de lo que queráis, pero fuera del horario sólo
          atenderá urgencias. De igual manera, la coordinadora respetará los
          horarios de los voluntarios y no los molestará si no fuese
          completamente necesario.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Horario Coordinación
        </Typography>
        <Typography variant="body2" gutterBottom>
          Lunes - Viernes: 9 - 14,30h // 16,30 - 21,30h
          <br />
          Sábados: 9,30 - 14,30h
          <br />
          Domingos: 20 - 22h
        </Typography>
        <Typography variant="body2" gutterBottom>
          *Fuera de este horario, aunque la veáis en línea en Whatsapp o mande
          algo urgente por los grupos oficiales del Módulo, a no ser que sea una
          urgencia, no os atenderá.
        </Typography>

        <Divider variant="middle" sx={dividerStyles} />

        <Typography variant="body1" fontWeight={500} gutterBottom>
          Grupos de Whatsapp
        </Typography>
        <Typography variant="body1" gutterBottom>
          Guardería
        </Typography>
        <Typography variant="body2" gutterBottom>
          Este es el grupo oficial del Módulo. Está cerrado para que solo las
          coordinadoras hablen en él y no se pierda la información importante.
          Es esencial que antes de acudir al turno se revise este grupo ya que
          por ahí os trasladaremos los avisos de auxiliares, trabajadores y
          Junta Directiva, como las reubicaciones, perros nuevos o tratamientos
          y pautas nuevas.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Chorras de Guardería
        </Typography>
        <Typography variant="body2" gutterBottom>
          Este es el grupo “no oficial” del Módulo. Aquí pueden hablar todos los
          voluntarios, preguntar dudas, mandar fotos… Sin excedernos ni faltar
          el respeto.
        </Typography>

        <Box height={70} />
      </Container>
    </>
  )
}
