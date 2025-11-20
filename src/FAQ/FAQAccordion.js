import "./FAQAccordion.css";

import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const FAQAccordion = () => {
  return (
    <div className="accordion-holder">
      <Accordion className="accordion-item">
        <AccordionSummary
          className="accordion-summary"
          expandIcon={<AddIcon className="expand-icon" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className="accordion-heading">
            Why choose our medical for your family?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion-item">
        <AccordionSummary
          expandIcon={<AddIcon className="expand-icon" />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" className="accordion-heading">
            Why we are different from others?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion-item">
        <AccordionSummary
          expandIcon={<AddIcon className="expand-icon" />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span" className="accordion-heading">
            Trusted & experience senior care & love
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion-item">
        <AccordionSummary
          expandIcon={<AddIcon className="expand-icon" />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography component="span" className="accordion-heading">
            Why choose our medical for your family?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default FAQAccordion;
