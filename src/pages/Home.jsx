import logo from "../assets/logo.svg";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen p-10 gap-10">
            <img src={logo} alt="Vlad Solomon logo" className="animate-pulse" />
            <div className="flex flex-col items-center gap-2 text-white opacity-90">
                <span className="italic">Website under construction...</span>
                <span className="font-bold">
                    Check out my{" "}
                    <a
                        href="https://github.com/vlad-solomon"
                        target="_blank"
                        rel="noreferrer"
                        className="border px-2 py-1 rounded mx-1 border-white/50 hover:bg-white/20 transition"
                    >
                        Github
                    </a>{" "}
                    in the meantime!
                </span>
            </div>
            <span className="absolute bottom-4 font-bold text-white italic opacity-50 flex">
                {"curl me".split("").map((letter, i) => (
                    <span
                        key={i}
                        className="animate-bob text-shadow-2xs"
                        style={{ animationDelay: `${i * 0.1}s` }}
                    >
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                ))}
            </span>
        </div>
    );
}
