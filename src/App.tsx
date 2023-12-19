import { Button } from "./components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { useToast } from "./components/ui/use-toast";

function App() {
  const { toast } = useToast();
  return (
    <ThemeProvider defaultTheme="system" storageKey="zestful-ui-theme">
      <Button
        onClick={() => {
          toast({
            title: "Hello",
            description: "This is a test toast!",
            variant: "success",
          });
        }}
      >
        Hello this is a test toast!
      </Button>
    </ThemeProvider>
  );
}

export default App;
