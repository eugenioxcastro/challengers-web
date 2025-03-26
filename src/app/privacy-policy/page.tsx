import { MainLayout } from "@/components/templates/MainLayout";

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-[#6366F1]/20">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#6366F1] to-[#ffcb30] bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="text-sm text-gray-500 mb-8">
              Última actualización: 22/03/25
            </div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Bienvenido a Challenger. Nos comprometemos a proteger la privacidad de nuestros usuarios. 
                Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos la información 
                personal de los usuarios de nuestra aplicación.
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#6366F1]">1. Información que Recopilamos</h2>
                <p>Podemos recopilar los siguientes tipos de información:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Información de Cuenta:</span> Nombre, correo electrónico y otra información proporcionada al registrarse.</li>
                  <li><span className="font-medium">Contenido Generado por el Usuario:</span> Fotos, descripciones y métricas relacionadas con los retos en los que participa.</li>
                  <li><span className="font-medium">Datos de Uso:</span> Información sobre el uso de la aplicación, como interacciones y participación en retos.</li>
                  <li><span className="font-medium">Datos del Dispositivo:</span> Información sobre el dispositivo, sistema operativo y configuraciones.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#6366F1]">2. Uso de la Información</h2>
                <p>Utilizamos la información recopilada para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Proporcionar y mejorar la funcionalidad de la aplicación.</li>
                  <li>Permitir la creación y participación en retos.</li>
                  <li>Mostrar leaderboards y avances en los retos.</li>
                  <li>Enviar notificaciones relacionadas con la actividad de la app.</li>
                  <li>Garantizar la seguridad y prevenir fraudes.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#6366F1]">3. Compartición de la Información</h2>
                <p>No compartimos información personal con terceros, excepto en los siguientes casos:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-medium">Proveedores de Servicios:</span> Trabajamos con servicios externos para hosting, almacenamiento y análisis de datos.</li>
                  <li><span className="font-medium">Cumplimiento Legal:</span> Podemos divulgar información si es requerida por ley o para proteger nuestros derechos.</li>
                  <li><span className="font-medium">Interacción con otros Usuarios:</span> Cierta información, como el progreso en retos y leaderboards, puede ser visible para otros usuarios.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#6366F1]">4. Seguridad de la Información</h2>
                <p>Tomamos medidas razonables para proteger la información de nuestros usuarios contra accesos no autorizados, alteración y pérdida de datos.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#6366F1]">5. Derechos del Usuario</h2>
                <p>Los usuarios pueden:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder, corregir o eliminar su información desde la configuración de la aplicación.</li>
                  <li>Solicitar la eliminación completa de su cuenta y datos enviando un correo a <a href="mailto:hello@challengerai.app" className="text-[#ffcb30] hover:text-[#ffcb30]/80">hello@challengerai.app</a>.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#6366F1]">6. Cambios en la Política de Privacidad</h2>
                <p>Podemos actualizar esta política en el futuro. Notificaremos a los usuarios sobre cambios significativos a través de la aplicación o por correo electrónico.</p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#6366F1]">7. Contacto</h2>
                <p>
                  Si tienes preguntas sobre esta Política de Privacidad, contáctanos en{' '}
                  <a href="mailto:hello@challengerai.app" className="text-[#ffcb30] hover:text-[#ffcb30]/80">
                    hello@challengerai.app
                  </a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 