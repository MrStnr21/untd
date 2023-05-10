import { TCardBig } from "../../services/types/data";

const aboutText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Habitant tincidunt aliquam tincidunt pretium sodales. 
Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. 
Urna, ut amet odio orci magnis praesent ultrices. 
Praesent malesuada lacus tellus tristique sit at. 
Sed viverra nulla nam arcu, non iaculis pretium, volutpat.`;

const achievmentsText = `Tristique odio pellentesque et tincidunt posuere arcu purus lobortis risus. 
Urna, ut amet odio orci magnis praesent ultrices. 
Praesent malesuada lacus tellus tristique sit at. 
Sed viverra nulla nam arcu, non iaculis pretium, volutpat.`;

const exampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Cras vulputate laoreet sapien a sit ante.`;

const materialsText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Cras vulputate laoreet sapien a sit ante.`;

const experienceText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Cras vulputate laoreet sapien a sit ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Cras vulputate laoreet sapien a sit ante.`;

const garantyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat.`;

const bigCardText: Array<TCardBig> = [
  { id: 1, text: garantyText },
  { id: 2, text: materialsText },
  { id: 3, text: exampleText },
];

const bigCardTextAlt: Array<TCardBig> = [
  { id: 1, text: materialsText },
  { id: 2, text: garantyText },
  { id: 3, text: exampleText },
];

export {
  aboutText,
  achievmentsText,
  exampleText,
  materialsText,
  experienceText,
  garantyText,
  bigCardText,
  bigCardTextAlt,
};
