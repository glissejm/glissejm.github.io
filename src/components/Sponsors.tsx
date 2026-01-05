
import { Container } from "./Container";

export function Sponsors() {
  return (
    <section
      id="sponsors"
      aria-labelledby="sponsors-title"
      className="py-16 sm:py-20 bg-gradient-to-b from-cyan-50 to-white"
    >
      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">
              Sponsors
            </h2>
            <p className="text-2xl text-slate-700">
              Apoya el futuro de las mujeres en tecnología
            </p>
          </div>

          {/* Call for Sponsors Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-cyan-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Icon/Visual */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full p-12">
                    <svg 
                      className="w-32 h-32 text-blue-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={1.5} 
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  ¿Quieres ser sponsor?
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Únete a nosotros para empoderar a la próxima generación de mujeres tecnólogas. 
                  Tu apoyo hace la diferencia.
                </p>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-slate-700">Visibilidad de marca ante la comunidad tech</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-slate-700">Conexión con talento femenino en tecnología</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-slate-700">Impacto social y diversidad en el ecosistema tech</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.link/vqkjny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="mailto:wtmayacucho@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Correo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Sponsor Tiers */}
            <div className="mt-12 pt-8 border-t border-cyan-100">
              <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">
                Niveles de patrocinio
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    icon: "🥇", 
                    tier: "Gold",
                    color: "from-yellow-400 to-yellow-600"
                  },
                  { 
                    icon: "🥈", 
                    tier: "Silver",
                    color: "from-gray-300 to-gray-500"
                  },
                  { 
                    icon: "🥉", 
                    tier: "Bronze",
                    color: "from-orange-400 to-orange-600"
                  }
                ].map((level, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-cyan-100"
                  >
                    <div className="text-5xl mb-3">{level.icon}</div>
                    <div className={`text-xl font-bold bg-gradient-to-r ${level.color} bg-clip-text text-transparent`}>
                      {level.tier}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">
                📧 Escríbenos para conocer más sobre los beneficios de cada nivel
              </p>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <div className="bg-cyan-50 rounded-2xl p-8 border-l-4 border-blue-600">
              <p className="text-lg text-slate-700 italic mb-4">
                'Cada sponsor nos ayuda a romper barreras y crear oportunidades para que más mujeres 
                lideren el futuro de la tecnología.'
              </p>
              <p className="text-blue-600 font-semibold">
                — Women Techmakers Ayacucho
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}