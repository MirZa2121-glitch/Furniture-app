import { Intro } from "./sections.tsx";
import { Support } from "./sections.tsx";
import { Collection } from "./sections.tsx";
import { Space } from "./sections.tsx";
import { Range } from "./sections.tsx";
import { Works } from "./sections.tsx";
import { Join } from "./sections.tsx";

const Main = function() {
    return (
        <main>
            <div className="w-full p-[0_15px] m-auto md:w-full">
                <Intro />
                <Support />
                <Collection />
                <Space />
                <Range />
                <Works />
                <Join />
            </div>
        </main>
    )
}

export default Main;