import { parseXml } from "libxmljs2"
import type { ParserOptions } from "libxmljs2"

// todo: bin linking

export default function validateSchema(
    xml: string|Buffer,
    xsdSchema: string|Buffer,
    xmlParserOptions ?: ParserOptions,
    xsdParserOptions ?: ParserOptions
) : true|ValidationError[] {
  const parsedXML = parseXml(xml.toString(), xmlParserOptions),
        parsedSchema = parseXml(xsdSchema.toString(), xsdParserOptions)

  // @ts-ignore
  return parsedXML.validate(parsedSchema) || parsedXML.validationErrors
}

export interface ValidationError extends Error {
  domain: number|null;
  code: number|null;
  level: number|null;

  line: number|null;
  column: number;
}
