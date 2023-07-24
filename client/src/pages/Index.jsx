import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Ministry from './Ministry';
import Bulletins from './Bulletins';
import Church from './Church';
import Contact from './Contact';
import Outreach from './Outreach';
import Network from './Network';


function Index() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Layout />}>
                    <Route index element={< Home />}/>
                    <Route path="/bulletins" element={< Bulletins />}/>
                    <Route path="/ministry" element={< Ministry />}/>
                    <Route path="/outreach" element={< Outreach />}/>
                    <Route path="/network" element={< Network />}/>
                    <Route path="/church" element={< Church />}/>
                    <Route path="/contact" element={< Contact />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index;