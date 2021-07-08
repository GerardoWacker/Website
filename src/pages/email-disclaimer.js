import React from 'react'
import 'normalize.css'
import './home.css'
import Header from '../components/header'
import Footer from '../components/footer'

export class EmailDisclaimer extends React.Component {
  render() {
    return(
      <>
      <Header isSmall={true} />
      <section id="disclaimer" className="site-content">
        <div className="about-section">
            <div className="desc-text">
                <p className="texts-large">
                    Aviso sobre correos electrónicos @rar.vg
                </p>
                <p className="texts-medium">
                    Esta sección trata sobre las medidas de seguridad tomadas en el envío de correos electrónicos utilizando el dominio de <b>rar.vg</b>.
                </p>
                <p className="texts-medium">
                    Los correos electrónicos enviados podrían incluir un certificado de índole S/MIME, el cual simboliza que su identidad está verificada por una entidad mayor.<br />
                </p>
                <p className="texts-medium">
                    Este parámetro se puede verificar dependiendo de su cliente de correos.<br />
                    En Gmail, el mismo se puede ver seleccionando la flecha a la derecha de la dirección del autor.
                </p>
                <p><img src="https://cdn.discordapp.com/attachments/733018646388932640/862787503952887878/unknown.png" /></p>
                <p><img src="https://cdn.discordapp.com/attachments/733018646388932640/862788350716149780/unknown.png" /></p>
                <p className="texts-medium">
                    En Outlook, el mismo aparecerá en estilo de sello a la derecha del nombre del autor.
                </p>
                <p><img src="https://cdn.discordapp.com/attachments/733018646388932640/862788726915858432/unknown.png" /></p>
                <p className="texts-medium">
                    Finalmente, en los clientes donde S/MIME no esté soportado (como Yahoo! Mail, Roundcube, entre otros) se podrá ver en formato de archivo adjunto, con el nombre <span style={{color: "#555", fontStyle: "italic"}}>smime.p7s</span>.
                </p>
                <p><img src="https://cdn.discordapp.com/attachments/733018646388932640/862789928038432779/unknown.png" /></p>
                <p className="texts-medium">
                    Dentro de lo usual, estos serán firmados por <a href="https://www.actalis.it/">Actalis</a>.
                </p>
                <p><img style={{width: "100%"}} src="https://i.rar.vg/KYS9QInGuNWcdiJuPrnlBOT5xQBdhZFw.png" /></p>
                <p className="texts-medium">
                    Además de lo mencionado, se podrá verificar que el correo que ha recibido es legítimo verificando su fuente. Este <b>siempre</b> contará con <a href="https://es.wikipedia.org/wiki/Sender_Policy_Framework">SPF</a>, <a href="https://es.wikipedia.org/wiki/DomainKeys_Identified_Mail">DKIM</a> y <a href="https://es.wikipedia.org/wiki/DMARC">DMARC</a>.<br />
                    Para ver esto, por ejemplo, en Gmail, se necesita abrir el mensaje original.
                </p>
                <p><img src="https://cdn.discordapp.com/attachments/733018646388932640/862791092620230686/unknown.png" /></p>
                <p><img src="https://cdn.discordapp.com/attachments/733018646388932640/862791773867868210/unknown.png" /></p>
                <p className="texts-medium">
                    Ante cualquier duda, podés contactarme mediante la dirección <a href="mailto:ge@rar.vg">ge@rar.vg</a>.
                </p>
            </div>
        </div>
      </section>
      <Footer/>
      </>
    )
  }
}