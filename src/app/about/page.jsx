import { Truck, Package, Headphones, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 bg-gray-50">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <img
          src="/shalia_about.jpg"
          alt="Shaila About"
          className="w-full h-auto rounded-lg shadow-md mb-8"
        />
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Shaila ist der vertrauenswürdigste Lieferant der Branche für
          Industrienahrungsmittel. Unser Unternehmen bietet mit seiner breiten
          Produktpalette verschiedene Verpackungslösungen an, beispielsweise
          auslaufsichere Behälter, Baklava-Behälter, Salatbehälter,
          Keksbehälter, Kuchenbehälter, Soßenbehälter, Feinkostbehälter,
          Fleischbehälter, Käsebehälter, Behälter für Sonderanfertigungen und
          Einwegprodukte.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Shaila ist nicht nur Branchenführer in der Türkei, sondern genießt
          auch international eine hohe Wertschätzung. Das Unternehmen spielt
          eine führende Rolle in der Verpackungsbranche, indem es seinen Kunden
          hochwertige und innovative Lösungen für die Anforderungen der
          industriellen Lebensmittelindustrie und der Endverbraucher an
          Einwegbehältern bietet.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Unser Unternehmen agiert mit einer Vision, die Entwicklungen in der
          Branche vorantreibt, indem es Kundenzufriedenheit und
          Qualitätsstandards auf höchstem Niveau hält. Das Ziel der Marke Shaila
          besteht nicht nur darin, ihren Kunden Verpackungsprodukte höchster
          Qualität zu bieten, sondern auch in puncto ökologische Nachhaltigkeit
          und Innovation eine Vorreiterrolle einzunehmen.
        </p>
      </div>

      <div className="max-w-6xl mt-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Unsere Dienstleistungen
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="flex flex-col items-center text-center">
            <Truck className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Produktion und Transport
            </h3>
            <p className="text-gray-600">
              Produktions- und Transportunterstützung.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Package className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Produktdesign
            </h3>
            <p className="text-gray-600">Unterstützung beim Produktdesign.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Headphones className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Kundendienst
            </h3>
            <p className="text-gray-600">Kundendienstunterstützung.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Lightbulb className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Forschung und Entwicklung
            </h3>
            <p className="text-gray-600">
              Forschungs- und Entwicklungsunterstützung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
