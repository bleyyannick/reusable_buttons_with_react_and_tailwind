import Accordion from "./components/Accordion";

function AccordionPage() {
    const items = [
      {
        id: "GUY7G",
        label: "TypeScript",
        content: "A superset of Javascript",
      },
      {
        id: "IUYG87Y",
        label: "JavaScript",
        content: "The main frontend language",
      },
      {
        id: "89Y79y",
        label: "React",
        content:
          "A popular rising library for building interactive user interface",
      },
    ];
    return <Accordion items={items} />;
  }
  
  export default AccordionPage;
  