import React from "react";
import Nav from "../Nav";
import "animate.css";
import ModuleAsssessmentResult from "../dashboard_modules/ModuleAsssessmentResult";
import ModuleCVE from "../dashboard_modules/ModuleCVE";
import ModuleLearn from "../dashboard_modules/ModuleLearn";
import ModuleMyTeam from "../dashboard_modules/ModuleMyTeam";
import { Link } from "react-router-dom";
import DataService from "../../services/DataService";

function Anatomy(props) {
  let myUserId = localStorage.getItem("uid");

  function updateStatus() {
    DataService.postRequest(`/api/v1/users/${myUserId}/elearning`, {
      elearning: "Anatomy",
    }).then(async (res) => {
      if (!(res.status === 200)) {
        // Show error and reset form
        // @ts-ignore
        const error = await res.json();
      } else {
        // Browse to login views
        // @ts-ignore
      }
    });
  }

  return (
    <div className=" bg-base-100  flex flex-col">
      <Nav isLoggedIn={true} className="top-0" />
      <div className="hero min-h-screen inline-flex flex-container flex-wrap content-center justify-center">
        <div className="card w-1/2 bg-base-100 shadow-xl">
          <figure className="">
            <img
              // @ts-ignore
              src={require("../../assets/blocks.jpg")}
              alt="building blocks"
              className="w-full h-60 object-cover hover:scale-105 transition ease-in-out duration-1000 blur-sm"
            />
          </figure>
          <div className="card-body p-28">
            <h2 className="card-title text-6xl font-black">
              Anatomy of Ransomware
              <div className="badge badge-accent">March 4th</div>
            </h2>
            <p className="text-2xl font-black mt-4 mb-4">
              What are the characteristics of a ransomware attack? What phases
              occur in an attack?
            </p>
            <p className="text-xl mb-2 text-ellipsis">
              In general, a common attack can be broken down into a timeline of
              six events, as described by security researchers from McAfee.
              These phases are shown in the figur below. Each one of these
              phases are discussed in details along this eLearning.
            </p>
            <figure className="mt-4 ">
              <img
                className="rounded-xl"
                // @ts-ignore
                src={require("../../assets/mcafee6.png")}
                alt="building blocks"
              />
            </figure>
            <p className="text-lg font-black mt-6">
              Phase 1. Distribution of Malicious Software
            </p>
            <p className="text-lg mb-4">
              In this phase, attackers are seeking an entry point for their
              malicious software in the victim’s system. The distribution phase
              of the ransomware can be aimed at a very specific target, e.g. a
              company that operates with very sensitive data or that is unable
              to venture any little amount of service downtime. As stated by
              Exabeam, most often these companies are situated in industries
              such as healthcare, banking, finance, education, and research or
              governmental-oriented work. However, it is more common for hacking
              groups to not set their goal to attack a particular target, but
              rather to achieve widespread infections over many different
              channels and companies. This can be achieved by establishing
              reselling channels with affiliate groups, as stated in the threat
              research report of Exabeam. In this model, hacking groups
              outsource the distribution of their malicious software to other
              groups that solely focus on distributing the ransomware in as many
              channels as possible. The distributors thereby earn a certain
              share of the overall profit of the attack. It has become apparent
              by the research of Wang and Wang, that in general, ransomware does
              not differ much from traditional malware when it comes to the
              distribution side of things. Therefore common practices in the
              distribution of ransomware show well known exploitation techniques
              such as:
            </p>
            <ol className="list-disc list-inside font-extrabold">
              (i) Drive-by-downloads / malicious e-mails
            </ol>
            <p className="text-lg mb-4">
              The purpose of this infection vector is to deceive the victim into
              unknowingly downloading and executing a piece of software without
              their knowledge and consent. This can happen in several ways, e.g.
              the user may open a malicious e-mail attachment, or unknowingly
              click on a malicious download link on a website. Sometimes even an
              owner of a trusted website could be the victim of an exposed
              vulnerability, which would allow mal-practicing hackers to place
              and distribute malicious pieces of software on a seemingly secure
              source. This specific case is also known as a watering hole
              attack.
            </p>
            <ol className="list-disc list-inside font-extrabold">
              (ii) Software vulnerabilities
            </ol>
            <p className="text-lg mb-4">
              The infamous WannaCry ransomware is a good example to show that
              hackers can even exploit vulnerabilities in the victim’s operating
              system to download and install malicious code. Infact, any type of
              software is potentially at risk, and with the help of exploit
              kits, which act as repository of known zero-day vulnerabilities
              and pre-written exploitation code, a breach into the target’s
              system is as easy as never before.
            </p>
            <ol className="list-disc list-inside font-extrabold">
              (iii) Malicious applications
            </ol>
            <p className="text-lg mb-4">
              Another infection method is the strategy of hiding harmful content
              within an application and disguising it as trustworthy, as denoted
              by Lipovsky. Here, the maliciouslyintended developer knowingly
              places harmful code into their software and often disguises it
              with a facade that provides real utility, such as e.g. in the case
              of ’Browser Turbo’, a browser cache-cleaning tool for Android,
              which had the hidden capabilities of stealing contacts, call logs,
              and text messages. Another method of distribution as outlined by
              Exabeam, describes a black market, seen in dark web marketplaces,
              where a hacking group takes the role of a software vendor,
              distributing their ransomware to providers’ through software
              licenses, akin to the managed service provider model seen in
              various professional enterprises.
            </p>
            <p className="text-lg font-black mt-6">
              Phase 2. Infection of Victim’s Device
            </p>
            <p className="text-lg mb-4">
              This part of the attack describes the first execution of malware
              on the infected device. In this step, the malware stages the
              attack and prepares everything it needs to conduct the next steps.
              This step can be seen as preparation of the attack, meaning that
              the data stored on the system has yet to be encrypted. Usually it
              can be observed that the ransomware modifies system configuration
              files e.g., to ensure that the malware runs at start-up. Depending
              on the ransomware, there are many additional attack preparation
              and system manipulation activities that can be observed: operating
              system repair and recovery can be disabled, as well as shadow
              copies, security suite update services, error reporting, and BITS
              . Sophisticated ransomware attacks also target backups found on
              any volume connected to the system and encrypt or remove them
              discreetly first before the actual system-wide attack takes place
              . All background processes relating to this phase in the attack
              usually deliberately mimic process names of official system or
              thirdparty processes. This is done to bypass detection by the user
              or the user’s anti virus system. The popular ransomware WannaCry
              e.g., uses the process name ’mssecsvc2.0’, i.e. ’Microsoft
              Security Center(2.0) Service’ in full length, in order to not
              raise any suspicions from the user or the installed security
              suite.
            </p>
            <p className="text-lg font-black mt-6">
              Phase 3. Communication with Adversary
            </p>
            <p className="text-lg mb-4">
              The majority of ransomware includes some form of communication
              with a host server in the domain of the attacker. In this phase of
              the attack, the infected system shares all relevant information
              for the attack with the so-called command and control (C&C)
              server. The most common use case of this phase is the transfer of
              the encryption key that is used to encrypt the system of the
              victim [44]. To avoid the detection of such data transfers in the
              network by the user or any installed security suite, the C&C
              servers have lately been found using cloud-based services, such as
              webmail or file-sharing services, so that the traffic generated in
              this step blends in with the usual egress traffic. Security suites
              can potentially detect static components of ransomware binaries,
              such as blacklisted, hard-coded IPs or domains. Therefore, there
              have been recorded ransomware cases where the attackers have used
              smarter dynamic domain generation algorithms to retaliate against
              these mechanisms. For each communication with the C&C server, the
              domain name changes which makes it much harder for firewalls to
              detect.
            </p>
            <p className="text-lg font-black mt-6">
              Phase 4. Searching and Scanning of Files on Infected Device
            </p>
            <p className="text-lg mb-4">
              In this fourth step, the ransomware process searches for
              particularly important files to target. The rationale being, that
              these files will maximize the damage caused to the user, as these
              are files that typically cannot be easily replicated. Popular file
              types to target are jpg, docx, xlsx, pptx and pdf. During the
              scanning process the ransomware enumerates local and
              network-accessible system drives, also scanning cloud file storage
              repositories such as iCloud, Dropbox, Google Drive, and others
            </p>
            <p className="text-lg font-black mt-6">
              Phase 5. Encryption of Data
            </p>
            <p className="text-lg mb-4">
              Up untilthis point in the ransomware attack process, no
              irreversible damages have been dealt to the infected system. In
              this fifth step however, the scanned files that were marked as
              important in the previous step are now processed by the encryption
              algorithm. In most cases, especially in more recent strands of
              ransomware, a smart hybrid use of symmetric and asymmetric
              encryption techniques are used to encrypt the data. The public key
              that is used to encrypt the files is obtained during the
              communication with the C&C servers. The private key used to
              decrypt the data is conveniently stored in the attacker’s domain
              and cannot be accessed by the user. Depending on the amount and
              size of the targeted files, this process can take up a few minutes
              to several hours.
            </p>
            <p className="text-lg font-black mt-6">Phase 6. Ransom Demand</p>
            <p className="text-lg mb-4">
              As soon as the encryption process is finished, the user will be
              notified by the process that they have been attacked. Typically a
              ransom note will be displayed to the user in the form of an
              automatically opened system dialogue box, by a readme file stored
              on the desktop, or by changing the desktop wallpaper. This ransom
              note includes payment instructions. Usually cryptocurrencies such
              as Bitcoin or Monero are used to guarantee pseudo anonymous in
              former or anonymous payment in latter case. If a victim chooses to
              pay the ransom, they are usually provided with a download link for
              the private key that is stored in the attacker’s domain, to
              decrypt their files. In large-scale attacks, each attacked user is
              mapped to a different public-private key combination, in order to
              prevent sharing of decryption keys.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-success hover:scale-105 w-2/6 self-center m-40"
        onClick={updateStatus}
      >
        <Link to="/dashboard">Complete this eLearning</Link>
      </button>
    </div>
  );
}

export default Anatomy;
