import { Loader2 } from "lucide-react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
    </>
  );
}

export default App;
