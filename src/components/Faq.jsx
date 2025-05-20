import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-left">
      <div
        className="flex flex-col lg:flex-row justify-center items-start gap-8 bg-gray-100 p-6 rounded-lg"
        style={{ minHeight: "500px" }}
      >
        {/* Left Section */}
        <div className="lg:w-1/2 self-center">
          <h1 className="text-3xl font-bold mb-4">FAQ</h1>
          <p className="text-gray-700 mb-4">
            In unserer FAQ findest Du Antworten auf die wichtigsten Fragen zu
            unseren umweltfreundlichen Verpackungsprodukten. Egal, ob es um
            Auswahl, Materialinformationen oder Bestell- und Lieferdetails geht
            – wir haben alle relevanten Informationen für Dich zusammengestellt,
            um dir ein angenehmes Einkaufserlebnis zu bieten.
          </p>
          <span className="text-gray-600">
            Bei weiteren Fragen stehen wir gerne zur Verfügung.
          </span>
        </div>

        <div className="w-full lg:w-1/2 self-center">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                Wie lange dauert die Lieferung?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Die Lieferzeit hängt von der Art der Verpackungslösung und der
                Bestellmenge ab. In der Regel beträgt die Lieferzeit für
                Standardprodukte 2–5 Werktage. Für individuelle Druckartikel,
                nach Druckfreigabe, ca. 4 Wochen. Bei Fragen kannst Du uns
                jederzeit über unsere Mailadresse oder das Kontaktformular
                kontaktieren.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                Bietet ihr individuelle Verpackungen mit Druck an?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Ja, wir bieten Dir die Möglichkeit, Verpackungen nach Deinen
                individuellen Anforderungen zu bedrucken. Ob Größe, Material
                oder Design – unsere Experten unterstützen Dich dabei, die
                perfekte Lösung für Dein Produkt zu finden. Erfahre mehr zu den
                Individuellen Verpackungen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                Gibt es Mengenrabatte bei größeren Bestellungen?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Ja, wir bieten attraktive Mengenrabatte für größere Bestellungen
                an. Je nach Bestellvolumen können wir Dir individuelle
                Preisnachlässe anbieten. Kontaktiere uns für ein
                maßgeschneidertes Angebot oder schau bei unserer Rabattstaffel
                vorbei.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                Übernehmt ihr die Lizenzierung meiner Verpackung?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Ja, Shaila kann die Entsorgungs- und Lizenzgebühren für
                Dich übernehmen. Wenn Du uns mit der Lizenzierung Deiner
                Verpackungen beauftragst, übernehmen wir die Gebührenabführung
                und die gesetzliche Meldung an die Zentrale Stelle. Das
                bedeutet, Du musst Dich um nichts kümmern – wir arbeiten bereits
                mit zugelassenen Systembetreibern zusammen, um die gesetzlichen
                Anforderungen zu erfüllen. Die entsprechenden Kosten für die
                Lizenzierung werden auf Deiner Rechnung transparent ausgewiesen.
                Wichtig: Eine rückwirkende Lizenzierung ist bei uns nicht
                möglich, daher bitten wir Dich, die Lizenzierung rechtzeitig zu
                beauftragen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                Wird meine Bestellung in einem Paket versendet?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Ja, aufgrund unserer unterschiedlichen Standorte kann es
                passieren, dass Deine Bestellung auf mehrere Pakete aufgeteilt
                wird.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
