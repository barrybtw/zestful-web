import { Button } from "./components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="zestful-ui-theme">
      <Button>Hello this is</Button>
    </ThemeProvider>
  );
}

export default App;
