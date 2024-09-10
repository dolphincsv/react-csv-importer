import {DolphinCSVImporter as Importer} from "@dolphincsv/csv-importer-js";
import {FC, useEffect, useState} from "react";

type Props = ConstructorParameters<typeof Importer>[0] & { open: boolean }


const DolphinCSVImporter: FC<Props> = (p) => {

  const [importer] = useState<Importer>(() => {
    if (p.mode !== 'demo') {
      return new Importer(p)
    } else {
      return new Importer(p)
    }

  });

  useEffect(() => {
    if (importer) {
      if (p.open) {
        importer.launch()
      } else {
        importer.close()
      }
    }
  }, [p.open, importer])

  return null;
}

export default DolphinCSVImporter
