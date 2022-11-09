import React from 'react';
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <div>

            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="mb-5 text-2xl font-semibold sm:text-4xl">Frequently Asked Questions About Us.</h2>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What Is a Lawyer?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">A lawyer provides legal advice and counsel on behalf of someone involved in a legal dispute or legal issue. Also called attorneys or counselors, lawyers typically represent people before a governing body (such as a court) by conducting legal research, gathering relevant documents and witnesses, drafting written briefs, and presenting oral arguments. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">I'm New to the United States and Need an Attorney. Can I Hire a Notary Public Instead?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">While some other countries use the terms "notary public" and "lawyer" interchangeably, that is not the case in the United States. Here, notary publics are commissioned by their state of residence to witness and authenticate signatures on legally binding documents. They do not advise on legal matters or otherwise practice law, although some lawyers also are notary publics.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What Are a Lawyer's Primary Responsibilities?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Under a state's bar admission, lawyers must uphold the law and protect the rights of their clients. In addition to actually knowing the law, particularly within their practice area, an attorney must communicate clearly with their clients, work competently to resolve their clients' needs, and be ethical in performing their duties.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What Do Lawyers Do? Do They Spend Most of Their Time Arguing Cases in Court?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">The practice of law is more than just appearing in court on behalf of a client. While many lawyers argue cases before judges, there are just as many lawyers who never step foot in a courtroom. But whether in or out of court, lawyers spend a great deal of time in an office handling a variety of tasks related to their clients' cases, such as researching new developments in the law, preparing legal documents, and giving legal advice.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What Are the Requirements for Becoming a Lawyer?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">People who hope to become lawyers must first complete special training and meet other professional requirements. Although each state has its own standards for licensing attorneys, most states require hopeful lawyers to obtain an undergraduate degree and then graduate from an accredited law school. Once the formal education is complete, they must also take and pass the state's bar examination (a rigid test of knowledge in all fields of law), submit to an investigation into their moral character and fitness to practice law, and be sworn in by their state's supreme court.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">May a Lawyer Who Is Licensed in One State Practice Law in Another State?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">No. Lawyers must comply with a state's bar admission requirements to practice law in that state. However, some states allow out-of-state attorneys to practice law if they have a certain amount of legal experience and receive approval from the state's highest court. Sometimes attorneys may participate in specific cases in states where they lack a license to do so, referred to as a "pro hac vice" (or "for this one particular occasion") appearance.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How Much Do Lawyers Cost?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">It depends. Attorneys typically charge by the hour, based on their level of experience and other factors, but sometimes they charge a flat fee for certain transactions. While a one- or two-hour visit might cost a few hundred dollars (sometimes the first consultation is free), an ongoing legal dispute or issue can cost thousands or tens of thousands of dollars. On the other hand, some personal injury attorneys don't collect a dime unless you win your case.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Where Can I Go To Research an Attorney?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">You can check if a lawyer has been disciplined by checking with the state disciplinary organization, often through a state's bar association website.</p>
                        </details>
                    </div>
                </div>
            </section>

            <Helmet>
                <title>About</title>
            </Helmet>
        </div>
    );
};

export default About;