import { BiSolidFileJson } from "react-icons/bi";
import { BsFiletypeXml } from "react-icons/bs";
import { FaFileCsv } from "react-icons/fa";
import { SiApachekafka, SiGooglecloud, SiKashflow, SiApachestorm } from "react-icons/si";

/* Components Starts */
export const SOURCE_NODE = 'SOURCE_NODE';
export const SINK_NODE = 'SINK_NODE';
export const TRANSFORM_NODE = 'TRANSFORM_NODE';
/* Component Ends */

/* Form Starts */
export const STREAM = 'STREAM';
export const BATCH = 'BATCH';
/* Form Ends */


export const nodeTypeData = {
    SOURCE_NODE: {
        type: SOURCE_NODE,
        data: {
            sourceType: BATCH,
            method: "",
            path: "",
        },
    },
    SINK_NODE: {
        type: SINK_NODE,
        data: { path: "" },
    },
    TRANSFORM_NODE: {
        type: TRANSFORM_NODE,
        data: { method: "" },
    },
}

export const methodOption = [
    { name: "Storm", Icon: SiApachestorm, color: "#F45DF4" },
    { name: "Kafka", Icon: SiApachekafka, color: "#ffffff" },
    {
        name: "Google cloud dataflow",
        Icon: SiGooglecloud,
        color: "#4285F4",
    },
    {
        name: "Amazon kinesis",
        Icon: SiKashflow,
        color: "#FF9900",
    },
];

export const typeOptions = [
    { name: "JSON", Icon: BiSolidFileJson, color: "#F7DF1E" },
    {
        name: "XML",
        Icon: BsFiletypeXml,
        color: "#F05032",
    },
    { name: "CSV", Icon: FaFileCsv, color: "#1E88E5" },
];




