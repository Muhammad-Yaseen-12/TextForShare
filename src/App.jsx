import Header from './components/Header.jsx';
import TextEditor from './components/TextEditor';
import Footer from './components/Footer.jsx';

function App() {
  return (
    // Outer container: sets the background color and centers content
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
      </div>
      
      {/* Main content wrapper */}
      <main className="w-full max-w-4xl p-4 mt-8 mb-20 md:mt-16 md:mb-32">
        <TextEditor />
      </main>

      {/* Footer is sticky to the bottom of the visible screen/content */}
      <Footer /> 
    </div>
  );
}

export default App;