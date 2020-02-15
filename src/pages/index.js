import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>
          <p style={{color: "cornflowerblue", fontSize: 50, fontWeight: 'bold'}}>
          Hola, soy Behar
          </p>

          <blockquote>
            <p>
              <strong>Frontend Developer</strong> con un background único:
            </p>
          </blockquote>

          <p>
            Me gusta hablar de&nbsp;<strong>diseño interactivo</strong> y <strong>experiencia de usuario</strong>&nbsp;de la misma manera que <strong>me encanta programar</strong>. Tengo más de <strong>2 años</strong> de experiencia&nbsp;<strong>programando para&nbsp;web</strong> y más de 9 años en la <strong>industria del software</strong>.
          </p>
          <p>
            He trabajado en las principales <strong>agencias de desarrollo</strong>, agencias del <strong>gobierno&nbsp;estatal</strong> y <strong>plataformas educativas</strong>. Me encanta <strong>hablar con los clientes</strong> y&nbsp;tengo una obsesión&nbsp;en crear&nbsp;<strong>software útil</strong> que haga que los humanos tengan <strong>éxito profesional y personalmente</strong>.
          </p>
          <p>
            ¿Experiencia de usuario? ✅ ¿Investigación y diseño? ✅. ¿Código? ✅.
          </p>
          <p>
            Entiendo que, para satisfacer las <strong>expectativas de los usuarios</strong>, uno debe hacer bien su tarea e <strong>investigar</strong>. Disfruto trabajando en entornos donde me <strong>desafían constantemente</strong> y donde puedo tener la libertad de <strong>experimentar</strong> y <strong>fallar</strong>.
          </p>
          <p>
            Si desea saber más, envíame un correo. Me encanta conocer gente nueva, así que no seas tímido.
          </p>
          <p>¡<a href="https://behar.io/contacto/">Charlemos</a>!</p>




          <br/>
          <Link to="/docs/get-started/introduction">
            <Button type="primary" size="large" icon="right-circle" style={{marginRight: 10}}>Recursos para programadores</Button>
          </Link>
          <Link to="/blog">
            <Button type="primary" size="large" icon="right-circle" style={{marginRight: 10}}>Blog</Button>
          </Link>
          <Button type="primary" size="large" icon="github" href="https://github.com/behagoras">Aporta a este repositorio</Button>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage