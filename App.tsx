import { ThemeProvider } from '@rneui/themed';
import { AuthProvider } from './app/providers';
import { MainTheme } from './app/themes';
import { Container } from './app/components';
import Navigation from './app/components/Navigation/Navigation';
import { ChainsProvider } from './app/providers/ChainsProvider';
import { IncomeProvider } from './app/providers/IncomeProvider';

export default function App() {
  return (
    <AuthProvider>
      <ChainsProvider>
        <IncomeProvider>
          <ThemeProvider theme={MainTheme}>
            <Container>
              <Navigation/>
            </Container>
          </ThemeProvider>
        </IncomeProvider>
      </ChainsProvider>
    </AuthProvider>
  );
}
