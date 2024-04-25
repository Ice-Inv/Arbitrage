import { ThemeProvider } from '@rneui/themed';
import { AuthProvider } from './app/providers/AuthProvider/AuthProvider';
import { MainTheme } from './app/themes';
import { Container } from './app/components';
import Navigation from './app/components/Navigation/Navigation';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={MainTheme}>
        <Container>
          <Navigation/>
        </Container>
      </ThemeProvider>
    </AuthProvider>
  );
}
