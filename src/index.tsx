import {DolphinCSVImporter as Importer} from "@dolphincsv/csv-importer-js";
import {FC, useEffect, useState} from "react";

type Props = ConstructorParameters<typeof Importer>[0] & { open: boolean }


const DolphinCSVImporter: FC<Props> = (p) => {

  const [importer] = useState<Importer>(() => {
    if (p.mode !== 'demo') {
      return new Importer({
        clientId: p.clientId,
        templateKey: p.templateKey,
        iFrameClassName: p.iFrameClassName || '',
        columns: p.columns,
        mode: p.mode,
        onSuccess: p.onSuccess,
        onError: p.onError,
        onClose: p.onClose,
      })
    } else {
      return new Importer({
        iFrameClassName: p.iFrameClassName || '',
        mode: p.mode,
        onSuccess: p.onSuccess,
        onError: p.onError,
        onClose: p.onClose,
      })
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
