# DolphinCSV Javascript SDK

**[DolphinCSV](https://dolphincsv.com)** is an **embeddable CSV importer** designed to help your users import spreadsheet data into your product. It works out of the box and takes just 10 minutes to set up.

You can embed the **DolphinCSV importer** in your product by using our JavaScript SDKs. Click here if you're looking for the **[Javascript SDK](https://github.com/dolphincsv/csv-importer-js)**.

To get your **Client ID**, **[create an account](https://service.dolphincsv.com/auth)**.

Check out our **[documentation here](https://docs.dolphincsv.com)**.

If you ever get stuck or need any help, feel free to click the chat button on the bottom right of our **[website](https://dolphincsv.com)**, and we'll assist you.

## Installation

```bash
npm install @dolphincsv/react-csv-importer -s
```

## Usage

```jsx
import { useState } from "react";
import { DolphinCSVImporter } from "@dolphincsv/react-csv-importer";

function MyComponent() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open Importer</button>
      
      <DolphinCSVImporter
        mode={'development'}
        clientId={"YOUR_CLIENT_ID"}
        templateKey={"YOUR_TEMPLATE_KEY"}
        open={open}
        columns={[
          {key: "name", label: "Name", type: "text", required: true},
          {key: "postcode", label: "postcode", type: "us_postcode", required: true},
          {key: "birthday", label: "Birthday", type: "date", required: true},
        ]}
        onSuccess={(importedData) => console.dir(importedData)}
        onClose={() => setOpen(false)}
        onError={(err) => console.log(err)}
      />
    </>
  )
}
```


