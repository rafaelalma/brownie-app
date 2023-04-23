import { ReactElement } from 'react'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded'

import { dividerStyles } from '../styles.ts'

const nestedListStyle = {
  listStyle: 'lower-alpha',
}

const WarningColor = styled.span`
  color: orange;
  font-weight: 500;
`
const ErrorColor = styled.span`
  color: red;
  font-weight: 500;
`
const DefaultColor = styled.span`
  color: blue;
  font-weight: 500;
`

export default function InstructionsSubview(): ReactElement {
  return (
    <>
      <Typography variant="body2" gutterBottom>
        Bienvenid@ al Módulo de Guardería.
      </Typography>
      <Typography variant="body2" gutterBottom>
        En el Módulo de Guardería (o Cachorros) tenemos perros desde los 4 meses
        hasta los 2/3 años de edad. Son los perros más “adoptables” del refugio,
        pero también son los que más devuelven una vez que crecen y la gente no
        sabe educarlos. Aún así, tenemos muy pocas “devoluciones”, y esto es
        gracias a todo el trabajo comprometido y bien hecho de los voluntarios
        que componen el módulo.
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
      <Typography
        textAlign="center"
        variant="body2"
        fontWeight={500}
        gutterBottom
        padding={1}
      >
        Laura Guerrero (
        <Link
          href="tel:633518657"
          variant="body2"
          fontWeight={500}
          underline="none"
        >
          633 51 86 57
        </Link>
        )
      </Typography>
      <Typography variant="body2" gutterBottom>
        Al haber solo una coordinadora se establece un horario de coordinación
        para no sobrecargarla las 24h. Dentro de este horario podéis hablar con
        ella sin problema de lo que queráis, pero fuera del horario sólo
        atenderá urgencias. De igual manera, la coordinadora respetará los
        horarios de los voluntarios y no los molestará si no fuese completamente
        necesario.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Horario Coordinación
      </Typography>
      <Typography
        textAlign="center"
        variant="body2"
        fontWeight={500}
        gutterBottom
      >
        Lunes - Viernes
        <br />
        9:00 - 14:30
        <br />
        16:30 - 21:30
      </Typography>
      <Typography
        textAlign="center"
        variant="body2"
        fontWeight={500}
        gutterBottom
      >
        Sábados
        <br />
        9:30 - 14:30
      </Typography>
      <Typography
        textAlign="center"
        variant="body2"
        fontWeight={500}
        gutterBottom
      >
        Domingos
        <br />
        20:00 - 22:00
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
        coordinadoras hablen en él y no se pierda la información importante. Es
        esencial que antes de acudir al turno se revise este grupo ya que por
        ahí os trasladaremos los avisos de auxiliares, trabajadores y Junta
        Directiva, como las reubicaciones, perros nuevos o tratamientos y pautas
        nuevas.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Chorras de Guardería
      </Typography>
      <Typography variant="body2" gutterBottom>
        Este es el grupo “no oficial” del Módulo. Aquí pueden hablar todos los
        voluntarios, preguntar dudas, mandar fotos… Sin excedernos ni faltar el
        respeto.
      </Typography>
      <Typography variant="body1" fontWeight={500} gutterBottom>
        Voluntarios nuevos / Veteranos
      </Typography>
      <Typography variant="body2" gutterBottom>
        Cuando un voluntario nuevo entra en el Módulo, debe pasar un tiempo
        siendo “nuevo” para aprender el funcionamiento y conocer a todos los
        perros. El cambio de ser “voluntario nuevo” a “veterano” depende de las
        valoraciones de los compañeros que van con el voluntario nuevo de turno.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Con estas valoraciones vemos si el voluntario nuevo está preparado ya
        para ser veterano y es capaz de llevar un turno solo y enseñar a los
        voluntarios nuevos que vayan entrando.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Las valoraciones se basan en:
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
            Estar pendiente del tiempo que sale cada chenil a patio
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
            Saberse el nombre de los perros
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
            Limpia
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
            Regaña y corrige a los perros
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
            Saber hacer curas y dar tratamientos
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
            Sabe usar y buscar información en la App: perros reservados y
            prereservados, pesos, medidas...
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
            Entra y sale bien de los cheniles sin que se escapen los perros
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
            Sabe atender a las familias que se interesen en adoptar
          </ListItemText>
        </ListItem>
      </List>
      <Typography variant="body2" gutterBottom>
        Una vez que el voluntario nuevo tenga varias valoraciones positivas, la
        coordinadora se lo hará saber y, en caso de que el voluntario se vea
        preparado para ser veterano, pasará de ser “nuevo” a “veterano” y se
        anunciará por el grupo de Whatsapp “Guardería”.
      </Typography>
      <Divider variant="middle" sx={dividerStyles} />
      <Typography variant="body1" fontWeight={500} gutterBottom>
        Cuadrante
      </Typography>
      <Typography variant="body2" gutterBottom>
        Aunque en el propio cuadrante vienen especificadas las normas, aquí va
        un breve resumen.
      </Typography>
      <Typography variant="body2" gutterBottom>
        El cuadrante se abre los <strong>VIERNES</strong> al mediodía.
        <br />
        El cuadrante se cierra los <strong>DOMINGOS</strong> a las{' '}
        <strong>20:00</strong>.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Tenéis tres días completos para apuntaros en el cuadrante y elegir qué
        día queréis ir la semana siguiente. Fuera de este horario el cuadrante
        <strong>NO</strong> se toca y quien no se haya apuntado no va de turno.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Si durante la semana <strong>NO</strong> podéis ir al turno elegido,
        debéis <strong>avisar</strong> por el grupo “Chorras de Guardería” para
        que los compañeros del turno lo sepan y pueda salir alguien que cubra el
        turno.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Hay un máximo de faltas justificadas y sin justificar.{' '}
        <strong>Tres faltas seguidas</strong> es baja del Módulo. Es también
        baja si se tienen <strong>muchas faltas pero no son continuadas</strong>
        . Necesitamos voluntarios que puedan ir regularmente, no tres veces cada
        dos meses.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Recordad que los créditos de la <strong>UMA</strong> se dan a los
        voluntarios que cumplen con el compromiso de voluntariado:{' '}
        <strong>4h x semana</strong>.
      </Typography>
      <Typography variant="body2" gutterBottom>
        El cuadrante se abre a <strong>tres voluntarios por turno</strong>, una
        vez se hayan completado todos se abrirá a cuatro, y así sucesivamente.
      </Typography>
      <ol>
        <li>
          <Typography variant="body2">
            <strong>En el cuadrante en sí</strong> los voluntarios{' '}
            <strong>NO</strong> se apuntan, <strong>NO</strong> escriben,{' '}
            <strong>NO</strong> modifican nada. El cuadrante en sí solo lo toca
            la coordinadora
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Voluntarios que faltan por apuntar</strong>: Aquí saldrán
            los nombres de todos los voluntarios del Módulo, junto a si son
            nuevos o no
          </Typography>
          <ol style={nestedListStyle}>
            <li>
              <Typography variant="body2">
                Ejemplo: Laura G (nueva) / Laura G
              </Typography>
            </li>
          </ol>
        </li>
        <li>
          <Typography variant="body2">
            <strong>
              Voluntarios para ir de turno / que tienen varios días disponibles
            </strong>
            : Aquí <strong>SÍ</strong> se apuntan los voluntarios. El voluntario
            debe poner su nombre y, entre paréntesis, si es nuevo + su
            disponibilidad
          </Typography>
          <ol style={nestedListStyle}>
            <li>
              <Typography variant="body2">
                Ejemplo: Laura G (nueva, martes mañana) / Laura G (viernes tarde
                y sábado mañana)
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Se debe especificar bien qué turnos elige el voluntario para que
                no haya confusión
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Si al apuntarse ya hay otros voluntarios apuntados antes que él
                para el mismo día y se llega con ellos al máximo por turno (tres
                voluntarios) y el cuadrante no se abre a cuatro, dicho
                voluntario no podrá ir de turno a no ser que hable con sus
                compañeros y se organicen entre ellos
              </Typography>
            </li>
          </ol>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Voluntarios que no pueden ir de turno</strong>: Aquí se
            apuntan los voluntarios que esa semana no puedan ir de turno.
            Tendrán que añadir entre paréntesis la justificación de la falta
          </Typography>
          <ol style={nestedListStyle}>
            <li>
              <Typography variant="body2">
                Ejemplo: Laura G (exámenes)
              </Typography>
            </li>
          </ol>
        </li>
        <li>
          <Typography variant="body2">
            <strong>Faltas de cuadrante</strong>: Este apartado{' '}
            <strong>NO</strong> se toca. Aquí se apuntan en rojo los voluntarios
            que ni se apuntan en el cuadrante ni van de turno
          </Typography>
        </li>
      </ol>
      <Typography variant="body2" gutterBottom>
        Recordad que debéis comprobar que os habéis apuntado bien, y volver a
        comprobar el cuadrante una vez que se avise por “Guardería” que se ha
        cerrado para saber cuándo vais esa semana.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Domingos y festivos <strong>NO</strong> hay turnos.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Una vez se cierre el cuadrante saldrá escrito en todos los turnos{' '}
        <strong>CUADRANTE CERRADO</strong> en distintos colores:
      </Typography>
      <Typography variant="body2" gutterBottom>
        <WarningColor>Naranja</WarningColor>: Salen los perros pero haría falta
        una persona más
        <br />
        <ErrorColor>Rojo</ErrorColor>: <strong>NO</strong> hay turno, los perros
        NO salen
        <br />
        <DefaultColor>Azul</DefaultColor>: Turno completo
      </Typography>
      <Typography variant="body2" gutterBottom>
        Salvo excepciones, si en un turno solo hay voluntarios nuevos sin
        veterano, <strong>NO</strong> hay turno.
      </Typography>
      <Divider variant="middle" sx={dividerStyles} />
      <Typography variant="body1" fontWeight={500} gutterBottom>
        Adopciones
      </Typography>
      <Typography variant="body2" gutterBottom>
        Cuando vienen familias interesadas en adoptar se les enseña los
        cachorros disponibles que hay en ese momento, <strong>NO</strong> se
        enseñan perros reservados ni perros que <strong>NO</strong> se puedan
        difundir en España, los perros pre reservados se pueden enseñar avisando
        antes a la coordinadora para que os diga en qué situación se encuentra
        el perro.
      </Typography>
      <Typography variant="body2" gutterBottom>
        <strong>NO</strong> se sacan perros de la jaula ni de patio para que los
        vean, las familias <strong>NO</strong> pueden entrar a patio{' '}
        <strong>NI</strong> a las jaulas.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Si una familia se interesa en un perro se les indica que deben escribir
        al email del Módulo (
        <Link
          href="mailto:cachorros@protectoramalaga.com"
          variant="body2"
          fontWeight={500}
          underline="none"
        >
          cachorros@protectoramalaga.com
        </Link>
        ) y la coordinadora le facilitará toda la información que necesite la
        familia.
      </Typography>
      <Typography variant="body2" gutterBottom>
        En listado aparecen todos los perros con su edad, peso, tamaño, posible
        enfermedad… Todo lo que necesitáis saber está ahí reflejado.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Si la familia en cuestión quiere ver perros de otros Módulos, se busca a
        un voluntario de dicho Módulo, <strong>NO</strong> enseñamos perros que
        no son de nuestro Módulo.
      </Typography>
      <Typography variant="body2" gutterBottom>
        <strong>PROHIBIDO</strong> meter las manos en las jaulas, nuestras o
        ajenas, y dar chucherías en las jaulas (muchas familias lo hacen).
      </Typography>
      <Typography variant="body2" gutterBottom>
        Las familias <strong>NO</strong> pueden entrar al D por detrás ni estar
        solos en nuestro pasillo. Si solo hay un voluntario de turno y no le
        puede enseñar los perros, se les remite al email y se les dará cita otro
        día.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Proceso de adopción:
      </Typography>
      <ol>
        <li>
          <Typography variant="body2">
            La familia interesada se fija en un perro del Módulo
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Escribe un email a{' '}
            <Link
              href="mailto:cachorros@protectoramalaga.com"
              variant="body2"
              fontWeight={500}
              underline="none"
            >
              cachorros@protectoramalaga.com
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            La coordinadora le explica las condiciones de adopción y, si están
            de acuerdo, les manda el cuestionario de pre adopción
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Si el cuestionario está bien, la coordinadora cita a la familia en
            el refugio y, si todo va bien, se realiza la adopción
          </Typography>
        </li>
      </ol>
      <Typography variant="body2" gutterBottom>
        <strong>NO</strong> os dejéis engañar si aparecen familias diciendo que
        tenían cita con tal persona, que habían rellenado cuestionario pero no
        les contestan, si quieren ver a tal perro fuera de la jaula… La
        coordinadora siempre os avisará de todo.
      </Typography>
      <Typography variant="body2" gutterBottom>
        El email está actualizado las 24h del día, pero siempre recordad que
        somos voluntarios, no máquinas, y que, si una vez tardamos en contestar
        un día, es normal.
      </Typography>
      <Typography variant="body2" gutterBottom>
        ¿Qué entra en la adopción?
      </Typography>
      <Typography variant="body2" gutterBottom>
        La adopción son 150€ que incluyen:
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">Vacunas y recordatorios</Typography>
        </li>
        <li>
          <Typography variant="body2">
            Desparasitación interna / externa
          </Typography>
        </li>
        <li>
          <Typography variant="body2">Chip + pasaporte</Typography>
        </li>
        <li>
          <Typography variant="body2">
            Castración <strong>OBLIGATORIA</strong>
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Seguimiento del animal una vez adoptado <strong>OBLIGATORIO</strong>{' '}
            (llamadas + fotos WhatsApp + visitas al domicilio)
          </Typography>
        </li>
      </ul>
      <Typography variant="body2" gutterBottom>
        En caso de que el perro fuese un PPP necesitaría, además, licencia para
        la tenencia de perros potencialmente peligrosos y un seguro de
        responsabilidad civil.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Se explica todo por email.
      </Typography>
      <Divider variant="middle" sx={dividerStyles} />
      <Typography variant="body1" fontWeight={500} gutterBottom>
        Seguimientos
      </Typography>
      <Typography variant="body2" gutterBottom>
        A medida que los voluntarios van siendo veteranos entran en el grupo de
        seguimientos.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Una vez que los perros se van adoptados en Málaga, al par de días un
        voluntario contacta con la familia adoptante para comprobar que todo va
        bien y que le manden fotos del perro en cuestión. Básicamente, los
        seguimientos sirven para no perderle la pista a los perros.
      </Typography>
      <Divider variant="middle" sx={dividerStyles} />
      <Typography variant="body1" fontWeight={500} gutterBottom>
        Tratamientos
      </Typography>
      <Typography variant="body2" gutterBottom>
        En la App se encuentra una vista con los tratamientos diarios de los
        perros.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Sólo lo modifica la coordinadora para evitar errores que perjudiquen la
        salud de los perros.
      </Typography>
      <Divider variant="middle" sx={dividerStyles} />
      <Typography variant="body1" fontWeight={500} gutterBottom>
        Jaulas
      </Typography>
      <Typography variant="body2" gutterBottom>
        En la App se encuentra una Vista con todos los perros del Módulo y en
        qué jaula se encuentra, también aparecen los perros reservados y para
        dónde están reservados.
      </Typography>
      <Divider variant="middle" sx={dividerStyles} />
      <Typography variant="body1" fontWeight={500} gutterBottom>
        Informes
      </Typography>
      <Typography variant="body2" gutterBottom>
        En la App se encuentra una vista con los informes.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Hay que escribir un informe después de cada turno para informar a los
        demás voluntarios de lo que pasa en cada turno.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Hora máxima subida de informe:
      </Typography>
      <Typography
        textAlign="center"
        variant="body2"
        fontWeight={500}
        gutterBottom
      >
        Turno mañana
        <br />
        16:00
      </Typography>
      <Typography
        textAlign="center"
        variant="body2"
        fontWeight={500}
        gutterBottom
      >
        Turno tarde
        <br />
        23:00
      </Typography>
      <Divider variant="middle" sx={dividerStyles} />
      <Typography variant="body1" fontWeight={500} gutterBottom>
        Difusiones
      </Typography>
      <Typography variant="body2" gutterBottom>
        La gran mayoría de las adopciones se consiguen a través de las
        difusiones que hacemos por RRSS, y para poder difundir a los perros
        necesitamos hacer videos y fotos.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Cualquier voluntario con un móvil que grabe bien o una cámara de fotos
        puede participar en el grupo de difusiones.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Vídeos
      </Typography>
      <Typography variant="body2" gutterBottom>
        En el grupo de difusiones se pasa todos los domingos una lista con los
        perros que hay que grabar esa semana.
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            Mínimo: 10 tomas por perro de la lista por turno
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Tomas de más de 20 segundos para poder aprovecharlo
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Vídeos <strong>SIEMPRE</strong> en <strong>HORIZONTAL</strong>
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Tomas que grabamos: paseo, mimos, cepillandolos, jugando con más
            perros, dándoles chucherías, corriendo por patio, mordisqueando
            juguetes…
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Los videos grabados se suben a la plataforma MEGA, para evitar que
            pierdan calidad mandandolos por WhatsApp
          </Typography>
        </li>
      </ul>
      <Typography variant="body2" gutterBottom>
        Ejemplo de vídeo:{' '}
        <Link
          href="https://www.youtube.com/watch?v=odTWJaHf3Ac"
          variant="body2"
          fontWeight={500}
          underline="none"
          target="_blank"
        >
          Youtube Brownie
        </Link>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Fotos
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            Para la web y difusiones necesitamos cámara de fotos o Iphone
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Tomas de más de 20 segundos para poder aprovecharlo
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Fotos <strong>SIEMPRE</strong> en <strong>HORIZONTAL</strong>
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Fotos que sacamos: de pie al lado de las piernas de un voluntario
            para ver el tamaño del perro, sentados, primer plano, sin que salga
            el voluntario con fondo bonito (plantas, muro patio cachorros, en
            paseo…)
          </Typography>
        </li>
      </ul>
      <Typography variant="body2" gutterBottom>
        Igualmente, también necesitamos material para el Instagram del Módulo,
        por lo que todos los videos y fotos en <strong>VERTICAL</strong> que
        hagáis durante los turnos, podéis enviarlo por el grupo Chorras de
        Guardería para usarlos.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Quien quiera entrar en el grupo de difusiones debe comunicárselo a la
        coordinadora.
      </Typography>
      <Divider variant="middle" sx={dividerStyles} />
      <Typography variant="body1" fontWeight={500} gutterBottom>
        RRSS
      </Typography>
      <Typography
        textAlign="center"
        variant="body2"
        fontWeight={500}
        gutterBottom
      >
        Instagram:{' '}
        <Link
          href="https://www.instagram.com/cachorrosprotemlg/"
          variant="body2"
          fontWeight={500}
          underline="none"
          target="_blank"
        >
          @cachorrosprotemlg
        </Link>
      </Typography>
      <Typography
        textAlign="center"
        variant="body2"
        fontWeight={500}
        gutterBottom
      >
        Facebook:{' '}
        <Link
          href="https://www.facebook.com/cachorrosprotemlg"
          variant="body2"
          fontWeight={500}
          underline="none"
          target="_blank"
        >
          Cachorros SPAPM
        </Link>
      </Typography>
      <Typography
        textAlign="center"
        variant="body2"
        fontWeight={500}
        gutterBottom
      >
        Email:{' '}
        <Link
          href="mailto:cachorros@protectoramalaga.com"
          variant="body2"
          fontWeight={500}
          underline="none"
        >
          cachorros@protectoramalaga.com
        </Link>
      </Typography>
      <Divider variant="middle" sx={dividerStyles} />
      <Typography variant="body1" fontWeight={500} gutterBottom>
        Varios
      </Typography>
      <List dense>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
            <strong>NO</strong> se sacan perros a clínica sin avisar antes a la
            coordinadora, ya que se han podido sacar en otro turno, que se les
            pase a los voluntarios, y que las auxiliares y veterinarias pierdan
            el tiempo revisando de nuevo a un perro que ya se revisó
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
            <strong>NO</strong> se discute ni con el Equipo Veterinario ni con
            los Trabajadores, si os mandan hacer algo que la coordinadora no ha
            dicho, se le avisa y lo hacéis, ella se encargará de hablar con
            quien sea si no está de acuerdo con esa decisión
            <br />
            Lo que digan los Trabajadores y Equipo Veterinario va a misa para
            los voluntarios.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LabelImportantRoundedIcon fontSize="small" htmlColor="black" />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body2' }}>
            El usuario y contraseña de acceso a la App serán proporcionadas por
            la coordinadora
          </ListItemText>
        </ListItem>
      </List>
      <Divider variant="middle" sx={dividerStyles} />
      <Typography variant="body2" gutterBottom>
        Para cualquier otra duda / sugerencia / problema, podéis acudir a la
        coordinadora sin problema.
      </Typography>
    </>
  )
}
