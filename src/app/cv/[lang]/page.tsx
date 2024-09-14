import {notFound} from "next/navigation";
import local from "@/lib/local";
import {availableLanguages, TAvailableCvLanguages, TLanguages} from "@/lib/types";
import {birthYear, cvContacts, languages, personal, portfolio} from "@/lib/cv-info";
import './style.css';
import Image from "next/image";
import {Calendar, MapPin} from "lucide-react";

interface CvPageProps {
    params: { lang: string };
}

const CvPage = async ({params}: CvPageProps) => {
    const {lang: langParam} = params;

    if (!langParam || !availableLanguages.includes(langParam as TAvailableCvLanguages)) {
        notFound();
    }

    const lang = langParam as TAvailableCvLanguages;

    const styles = {
        heading: "text-2xl border-b-4 mb-2 font-bold uppercase",
        badge: "border border-gray-300 py-0.5 px-1 rounded text-gray-400"
    };

    return (
        <main className="w-full space-y-3">
            <section className="space-y-1">
                <h1 className="text-5xl font-bold">{local[lang].name}</h1>
                <p className={`text-3xl text-pink-500`}>Full stack Developer</p>
            </section>
            <section className="flex justify-between gap-5">
                <Image
                    src={personal.photo}
                    alt='Моє фото'
                    width={200}
                    height={200}
                    className="rounded w-1/3"
                />
                <div>
                    <h2 className={styles.heading}>Summary</h2>
                    <p className="text-xl text-gray-400">
                        {local[lang].summary} {new Date().getFullYear() - birthYear} {local[lang].yo}
                    </p>
                </div>
            </section>
            <section className="grid grid-cols-3 w-full">
                {cvContacts.map(contact => (
                    <div key={contact.label} className="flex items-center gap-2 mt-2">
                        <contact.icon/>
                        <p>{contact.label}</p>
                    </div>
                ))}
            </section>
            <section className="grid grid-cols-2 gap-4">
                <div>
                    <h2 className={styles.heading}>Experience</h2>
                    <div className="space-y-2.5">
                        <span className={`text-xl text-pink-500`}>Agile Alpaca Agency</span>
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                                <Calendar/>
                                2022 - 2024
                            </span>
                            <span className="flex items-center gap-1">
                                <MapPin/>
                                Kyiv, Ukraine
                            </span>
                        </div>
                        <div className="border-dashed border-b border-gray-400 pb-3">
                            <h3 className="text-2xl">SEO specialist</h3>
                            <p className="text-gray-400">{local[lang].experience.seo}</p>
                        </div>
                        <div>
                            <h3 className="text-2xl">Full stack developer</h3>
                            <p className="text-gray-400">{local[lang].experience.developer}</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 font-bold">
                    <h2 className={styles.heading}>Skills</h2>
                    {Object.values(portfolio).map(skills => (
                        skills.heading !== 'Actually important' &&
                        <div key={skills.heading} className="border-dashed border-b border-gray-400 pb-3">
                            <h3 className={`text-xl mb-0.5 font-medium text-pink-500`}>{skills.heading}</h3>
                            <span className="flex items-center gap-2 flex-wrap">
                                {skills.skills.map(skill => (
                                    <p key={skill.label} className={styles.badge}>{skill.label}</p>
                                ))}
                            </span>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className={styles.heading}>Education</h2>
                    <div className="space-y-3.5">
                        <p className="text-2xl">{local[lang].education.degree}</p>
                        <span className={`text-xl text-pink-500`}>{local[lang].education.university}</span>
                        <span className="flex items-center gap-1">
                            <Calendar/>
                            2021 - 2025
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className={styles.heading}>Languages</h2>
                    <div className="flex items-center gap-2">
                        {languages.map(language => (
                            <p key={language} className={styles.badge}>{local[lang][language as TLanguages]}</p>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CvPage;
