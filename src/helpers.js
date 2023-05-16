import React from 'react';

export function initializeVaccines() {
    let vaccines = new Map();

    //Set generics first
    vaccines.set("DTAP", {
        imgName: "dtap.png",
        name: "DTaP",
        genericIndexName: "DTAP",
        PIUrl: "http://www.google.com",
        tradeAndTrue: <span>DTAP[]</span>});
    vaccines.set("HEPA", {
        imgName:"hepa.png",
        name: "HepA",
        genericIndexName: "HEPA",
        PIUrl: "http://www.google.com",
        tradeAndTrue:<span>HepA []</span>});
    vaccines.set("HEPB", {
        imgName:"hepb.png",
        name: "HepB",
        genericIndexName: "HEPB",
        PIUrl: "http://www.google.com",
        tradeAndTrue:<span>HepB []</span>});
    vaccines.set("HIB", {
        imgName:"hib.png",
        name: "Hib",
        genericIndexName: "HIB",
        PIUrl: "http://www.google.com",
        tradeAndTrue:<span>Hib []</span>});
    vaccines.set("HPV", {
        imgName:"hpv.png",
        name: "HPV",
        genericIndexName: "HPV",
        PIUrl: "http://www.google.com",
        tradeAndTrue:<span>HPV []</span>});
    vaccines.set("IIV", {
        imgName:"iiv.png",
        name: "IIV",
        genericIndexName: "IIV",
        PIUrl: "http://www.google.com",
        tradeAndTrue: <span>IIV []</span>});
    vaccines.set("IPV",  {
        imgName:"ipv.png",
        name: "IPV",
        genericIndexName: "IPV",
        PIUrl: "http://www.google.com",
        tradeAndTrue: <span>IPV []</span>});
    vaccines.set("LAIV", {
        imgName:"laiv.png",
        name: "LAIV",
        genericIndexName: "LAIV",
        PIUrl: "http://www.google.com",
        tradeAndTrue: <span>LAIV []</span>});
    vaccines.set("MEN", {
        imgName:"men.png",
        name: "Men",
        genericIndexName: "MENACWY",
        PIUrl: "http://www.google.com",
        tradeAndTrue: <span>MEN []</span>});
    vaccines.set("MMR", {
        imgName:"mmr.png",
        name: "MMR",
        genericIndexName: "MMR",
        PIUrl: "http://www.google.com",
        tradeAndTrue: <span>MMR []</span>});
    vaccines.set("PCV", {
        imgName:"pcv.png",
        name: "PCV",
        genericIndexName: "PCV",
        PIUrl: "http://www.google.com",
        tradeAndTrue: <span>PCV []</span>});
    vaccines.set("RV", {
        imgName:"rv.png",
        name: "RV",
        genericIndexName: "RV",
        PIUrl: "http://www.google.com",
        tradeAndTrue:<span>RV []</span>});
    vaccines.set("TDAP", {
        imgName:"tdap.png",
        name: "TDaP",
        genericIndexName: "TDAP",
        PIUrl: "http://www.google.com",
        tradeAndTrue: <span>TDAP []</span>});
    vaccines.set("VAR", {
        imgName:"var.png",
        name: "VAR",
        genericIndexName: "VAR",
        PIUrl: "http://www.google.com",
        tradeAndTrue: <span>VAR []</span>});
    vaccines.set("ACTHIB", {    //**SANOFI DRUG **/
        imgName: "acthib.png",
        IndicationBlurb: <span>the prevention of invasive disease caused by <i>Haemophilus influenzae</i> type b. ActHIB vaccine is approved for use as a four dose series in infants and children 2 months through 5 years of age.</span>,
        isSanofi: true,
        ISIBlurb: <span>ActHIB is contraindicated in persons who have had a severe allergic reaction (e.g., anaphylaxis) after a previous dose of any Haemophilus influenzae type b or tetanus toxoid-containing vaccine or to any component of ActHIB. If Guillain-Barr&eacute; syndrome has occurred within 6 weeks following previous vaccination with a tetanus toxoid-containing vaccine, or if adverse events have occurred in temporal relation to receipt of tetanus toxoid-containing vaccine, or if adverse events have occurred in temporal...</span>,
        ISIFile: "acthib-ISI.pdf",
        name: "ActHIB",
        PIUrl: "https://www.vaccineshoppe.com/ActHIBPI",
        tradeAndTrue: <span>ACTHIB<sup>&reg;</sup> [<i>Haemophilus b</i> Conjugate Vaccine (Tetanus Toxoid Conjugate)]</span>});
    vaccines.set("ADACEL", {     //**SANOFI DRUG **/
        imgName:"adacel.png",
        IndicationBlurb: <span>active booster immunization against tetanus, diphtheria, and pertussis. Adacel is approved for use in individuals 10 through 64 years of age.</span>,
        isSanofi: true,
        ISIBlurb: <span>Adacel is contraindicated in persons who have had a severe allergic reaction (e.g., anaphylaxis) to any other tetanus toxoid-, diphtheria toxoid‐, or pertussis antigen-containing vaccine,
or to any component of Adacel; or encephalopathy within 7 days after a previous dose of a pertussis antigen-containing vaccine with no other identifiable cause. If Guillain‐Barr&eacute; syndrome or brachial neuritis has occurred within 6 weeks following previous
vaccination with a tetanus toxoid‐containing vaccine or if progressive or unstable neurologic...</span>,
        ISIFile: "adacel-ISI.pdf",
        name: "Adacel",
        PIUrl: "https://www.vaccineshoppe.com/AdacelPI",
        tradeAndTrue: <span>ADACEL<sup>&reg;</sup> (tetanus toxoid, reduced diphtheria toxoid and acellular pertussis vaccine adsorbed)</span>});
    vaccines.set("AFLURIA QUADRIVALENT", {
        imgName:"afluria.png",
        name: "Afluria Quadrivalent",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=84452700-6f7b-4eec-af36-ee2e0f52f7f0&type=display",
        tradeAndTrue: <span>AFLURIA<sup>&reg;</sup> QUADRIVALENT [Influenza Vaccine]</span>});
    vaccines.set("BOOSTRIX", {
        imgName:"boostrix.png",
        name: "Boostrix",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=cd98bff9-4602-4268-d68d-029a14a5513b&type=display",
        tradeAndTrue: <span>BOOSTRIX (tetanus toxoid, reduced diphtheria toxoid and acellular pertussis vaccine adsorbed)</span>});
    vaccines.set("DAPTACEL", {    //**SANOFI DRUG **/
        imgName:"daptacel.png",
        IndicationBlurb: <span>active immunization against diphtheria, tetanus, and pertussis as a 5-dose series in infants and children 6 weeks through 6 years of age (prior to 7<sup>th</sup> birthday).</span>,
        isSanofi: true,
        ISIBlurb: <span>DAPTACEL is contraindicated in anyone who has had a severe allergic reaction (e.g., anaphylaxis) after a previous dose of any diphtheria toxoid-, tetanus toxoid-, or pertussis antigen-containing vaccine, or any component of DAPTACEL; has a
progressive neurologic disorder; or experienced encephalopathy within 7 days after a previous dose of a pertussis antigen-containing vaccine with no other identifiable cause. Carefully consider benefits and risks before administering DAPTACEL to persons with a history of</span>,
        ISIFile: "daptacel-ISI.pdf",
        name: "DAPTACEL",
        PIUrl: "https://www.vaccineshoppe.com/DAPTACELPI",
        tradeAndTrue: <span>DAPTACEL<sup>&reg;</sup> (Diphtheria and Tetanus Toxoids and Acellular Pertussis Vaccine Adsorbed)</span>});
    vaccines.set("ENGERIX-B", {
        imgName:"engerix-b.png",
        name: "Engerix-B",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=2ec65f7e-4aa2-4b41-b578-885ea59d6e9d&type=display",
        tradeAndTrue: <span>ENGERIX-B [Hepatitis B Vaccine (Recombinant)]</span>});
    vaccines.set("FLUARIX QUADRIVALENT", {
        imgName:"fluarix.png",
        name: "Fluarix Quadrivalent",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=ebeb1c66-deab-4358-a5c0-d4f58c8d8ae7&type=display",
        tradeAndTrue: <span>FLUARIX<sup>&reg;</sup> QUADRIVALENT (Influenza Vaccine)</span>});
    vaccines.set("FLUCELVAX QUADRIVALENT", {
        imgName:"flucelvax.png",
        name: "Flucelvax Quadrivalent",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=40406cf8-a2ae-4159-a8a5-5d02e5c6c7bc&type=display",
        tradeAndTrue: <span>FLUCELVAX<sup>&reg;</sup> QUADRIVALENT (Influenza Vaccine)</span>});
    vaccines.set("FLULAVAL QUADRIVALENT", {
        imgName:"flulaval.png",
        name: "Flulaval Quadrivalent",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a9806027-8323-4abf-849f-46fb10984f13&type=display",
        tradeAndTrue: <span>FLULAVAL<sup>&reg;</sup> QUADRIVALENT(Influenza Vaccine)</span>});
    vaccines.set("FLUMIST QUADRIVALENT", {
        imgName:"flumist.png",
        name: "FluMist Quadrivalent",
        PIUrl: "https://www.azpicentral.com/flumistquadrivalent/flumistquadrivalent.pdf#page=1",
        tradeAndTrue: <span>FLUMIST<sup>&reg;</sup> QUADRIVALENT (Influenza Vaccine Live, Intranasal)</span>});
    vaccines.set("FLUZONE QUADRIVALENT", {    //**SANOFI DRUG **/
        imgName:"fluzone.png",
        IndicationSpecial: <span>a vaccine</span>,
        IndicationBlurb: <span>active immunization for the prevention of influenza disease caused by influenza A subtype viruses and type B viruses contained in the vaccine. Fluzone
Quadrivalent is approved for use in persons 6 months of age and older.</span>,
        isSanofi: true,
        ISIBlurb: <span>Fluzone Quadrivalent should not be administered to anyone who has had a severe allergic reaction (e.g., anaphylaxis) to any component of the vaccine, including egg protein, or after previous dose of any influenza vaccine. Appropriate medical treatment and supervision must be available to manage possible anaphylactic
reactions following administration of the vaccine. If Guillain-Barr&eacute; syndrome has occurred within 6 weeks following previous influenza vaccination, the
decision to give Fluzone Quadrivalent should be</span>,
        ISIFile: "fluzone-ISI.pdf",
        name: "Fluzone Quadrivalent",
        PIUrl: "https://www.vaccineshoppe.com/FluzoneQuadrivalentPI",
        tradeAndTrue: <span>FLUZONE<sup>&reg;</sup> QUADRIVALENT (Influenza Vaccine)</span>});
    vaccines.set("GARDASIL 9", {
        imgName:"gardasil9.png",
        name: "Gardasil 9",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=a21f4f4b-b891-4f25-b747-cb9ec7d865d6&type=display",
        tradeAndTrue: <span>GARDASIL<sup>&reg;</sup>9 (Human Papillomavirus 9-valent Vaccine, Recombinant)<br/><br/>*Please refer to the full Prescribing Information for complete dosage and administration regimens and schedule.</span>});
    vaccines.set("HAVRIX", {
        name: "Havrix",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=f9499a4d-1288-4bd3-9d59-1d72092c38cd&type=display",
        imgName:"havrix.png", 
        tradeAndTrue: <span>HAVRIX<sup>&reg;</sup> (Hepatitis A Vaccine)</span>,
        dynamicRange: 1});
    vaccines.set("HIBERIX", {
        imgName:"hiberix.png",
        name: "Hiberix",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=745ff8df-1618-4b76-9aa1-6f42752c0dda&type=display",
        tradeAndTrue: <span>HIBERIX<sup>&reg;</sup> (Haemophilus b Conjugate Vaccine [Tetanus Toxoid Conjugate])</span>});
    vaccines.set("INFANRIX", {
        imgName:"infanrix.png",
        name: "Infanrix",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=de16dd6a-859b-4180-c6af-f930be14f26a&type=display",
        tradeAndTrue: <span>INFANRIX<sup>&reg;</sup> (Diphtheria and Tetanus Toxoids and Acellular Pertussis Vaccine Adsorbed)</span>});
    vaccines.set("IPOL",  {    //**SANOFI DRUG **/
        imgName:"ipol.png",
        IndicationBlurb: <span>active immunization of infants (as young as 6 weeks of age), children, and adults for the prevention of poliomyelitis caused by poliovirus Types
1, 2, and 3.</span>,
        isSanofi: true,
        ISIBlurb: <span>IPOL should not be administered to anyone who has had a severe allergic reaction to any component of the vaccine, including 2-phenoxyethanol, formaldehyde, neomycin, streptomycin, and polymyxin B.<br/>No further doses should be given if anaphylaxis or anaphylactic shock occurred within 24
hours of administration of 1 dose of vaccine. Although no causal relationship between IPOL and Guillain-Barr&eacute; Syndrome (GBS) has been
established, GBS has been temporally related to administration of another inactivated poliovirus
vaccine.</span>,
        ISIFile: "ipol-ISI.pdf",
        name: "IPOL",
        PIUrl: "https://www.vaccineshoppe.com/IPOLPI",
        tradeAndTrue: <span>IPOL<sup>&reg;</sup> (Poliovirus Vaccine Inactivated)</span>});
    vaccines.set("KINRIX", {
        imgName:"kinrix.png",
        name: "Kinrix",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=6b5f89e9-1292-4f13-5590-44c874bf299c&type=display",
        tradeAndTrue: <span>KINRIX<sup>&reg;</sup> (Diphtheria and Tetanus Toxoids and Acellular Pertussis Adsorbed and Inactivated Poliovirus Vaccine)</span>});
    vaccines.set("MEN2", {
        imgName:"men2.png",
        name: "Men-2*",
        PIUrl: "http://www.google.com",
        tradeAndTrue: <span>MEN-2* []</span>});
    vaccines.set("MENACTRA", {    //**SANOFI DRUG **/
        imgName:"menactra.png",
        IndicationBlurb: <span>active immunization to prevent invasive meningococcal disease caused by <i>Neisseria meningitidis</i> serogroups A, C, Y, and W-135. Menactra is approved for use in individuals 9 months through 55 years of
age. Menactra does not prevent <i>N meningitidis</i> serogroup B disease.</span>,
        isSanofi: true,
        ISIBlurb: <span>Menactra is contraindicated in persons who have had a severe allergic reaction
(e.g., anaphylaxis) after a previous dose of a meningococcal capsular polysaccharide-,
            diphtheria toxoid-, or CRM<sub>197</sub>-containing vaccine, or to any component of the vaccine. Persons previously diagnosed with Guillain-Barr&eacute; syndrome (GBS) may be at increased
risk of GBS following receipt of Menactra. GBS has been reported in</span>,
        ISIFile: "menactra-ISI.pdf",
        name: "Menactra",
        PIUrl: "https://www.vaccineshoppe.com/MenactraPI",
        tradeAndTrue: <span>MENACTRA<sup>&reg;</sup> [Meningococcal (Groups A, C, Y and W-135) Polysaccharide Diphtheria Toxoid Conjugate Vaccine]</span>});
    vaccines.set("MENQUADFI", {    //**SANOFI DRUG **/
        imgName:"menquadfi.png",
        IndicationSpecial: <span>a vaccine</span>,
        IndicationBlurb: <span>active immunization for the prevention of invasive meningococcal disease caused by <i>Neisseria meningitidis</i> serogroups A, C, W, and Y. MenQuadfi is approved for use in
individuals 2 years of age and older. MenQuadfi does not prevent <i>N meningitidis</i> serogroup B disease.</span>,
        isSanofi: true,
        ISIBlurb: <span>MenQuadfi should not be administered to anyone who has had a severe allergic reaction to any
component of the vaccine, or after a previous dose of MenQuadfi or any other tetanus toxoid-containing
vaccine. Appropriate observation and medical treatment should always be readily available in case of an
anaphylactic event following the administration of the vaccine. Some individuals with altered immunocompetence</span>,
        ISIFile: "menquadfi-ISI.pdf",
        name: "MenQuadfi",
        PIUrl: "http://vaccineshoppe.com/menquadfipi",
        tradeAndTrue: <span>MenQuadfi<sup>&reg;</sup> [Meningococcal (Groups A, C, Y, W) Conjugate Vaccine]</span>});
    vaccines.set("MENVEO", {
        imgName:"menveo.png",
        name: "Menveo",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=2dc730d5-55fd-4e98-8c8a-daa7d8f872b0&type=display ",
        tradeAndTrue: <span>MENVEO [Meningococcal (Groups A, C, Y, and W-135) Oligosaccharide Diphtheria CRM<sup>197</sup> Conjugate Vaccine]</span>});
    vaccines.set("M-M-R II", {
        imgName:"mmr2.png",
        name: "M-M-R II",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=0a9e384f-e717-436b-b9a0-15e53cef0862&type=display",
        tradeAndTrue: <span>M-M-R<sup>&reg;</sup> II (Measles, Mumps, & Rubella Virus Vaccine Live)</span>});
    vaccines.set("MMRV", {
        imgName:"mmrv.png",
        name: "MMRV",
        PIUrl: "http://www.google.com",
        tradeAndTrue: <span>MMRV []</span>});
    vaccines.set("PEDIARIX", {
        generic: vaccines.get("HEPB"),
        imgName:"pediarix.png",
        isCombo: true,
        name: "Pediarix",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=b63c4c7d-3dbf-419d-84cc-2c1957b92be7&type=display",
        tradeAndTrue: <span>PEDIARIX<sup>&reg;</sup> [Diphtheria and Tetanus Toxoids and Acellular Pertussis Adsorbed, Hepatitis B (Recombinant) and Inactivated Poliovirus Vaccine]</span>});
    vaccines.set("PEDVAXHIB", {
        imgName:"pedvax.png",
        name: "PedvaxHIB",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=9dff46c6-4b15-4d10-aca6-d5ef3735a530&type=display ",
        tradeAndTrue: <span>PEDVAXHIB<sup>&reg;</sup> (Haemophilus b Conjugate Vaccine [Meningococcal Protein Conjugate])</span>});
    vaccines.set("PENTACEL", {    //**SANOFI DRUG **/
        imgName:"pentacel.png",
        IndicationBlurb: <span>active immunization against diphtheria, tetanus, pertussis, poliomyelitis, and invasive disease due to <i>H influenzae</i> type b. Pentacel is...</span>,
        isSanofi: true,
        ISIBlurb: <span>Contraindications to vaccination with Pentacel include: a severe allergic reaction (e.g., anaphylaxis) after a previous dose of Pentacel, any ingredient of Pentacel, or any other diphtheria toxoid-, tetanus toxoid-,
pertussis antigen-containing vaccine, inactivated poliovirus vaccine, or <i>Haemophilus</i>...</span>,
        ISIFile: "pentacel-ISI.pdf",
        name: "Pentacel",
        PIUrl: "https://www.vaccineshoppe.com/511-05",
        tradeAndTrue: <span>PENTACEL<sup>&reg;</sup>  [Diphtheria and Tetanus Toxoids and Acellular Pertussis Adsorbed, Inactivated Poliovirus and Haemophilus b Conjugate (Tetanus Toxoid Conjugate) Vaccine]</span>});
    vaccines.set("PREVNAR 13", {
        imgName:"prevnar.png",
        name: "Prevnar 13",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=5d49181b-b974-a5da-3b38-12a3a87bb96b&type=display ",
        tradeAndTrue: <span>PREVNAR 13<sup>&reg;</sup> (Pneumococcal 13-valent Conjugate Vaccine [Diphtheria CRM<sup>197</sup> Protein])</span>});
    vaccines.set("PROQUAD", {
        imgName:"proquad.png",
        name: "ProQuad",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=73eae9fc-507b-4c9c-883d-63eb2e3cc6f6&type=display",
        tradeAndTrue: <span>PROQUAD<sup>&reg;</sup> [Measles, Mumps, Rubella and Varicella Virus Vaccine Live]</span>});
    vaccines.set("QUADRACEL", {    //**SANOFI DRUG **/
        imgName:"quadracel.png",
        IndicationBlurb: <span>active immunization against diphtheria, tetanus, pertussis, and poliomyelitis. A single dose of Quadracel is approved as a fifth dose in the diptheria, tetanus, pertussis (DTaP) vaccination series, and as a fourth or fifth dose in the...</span>,
        isSanofi: true,
        ISIBlurb: <span>Contraindications to vaccination with Quadracel include: a severe allergic reaction (e.g., anaphylaxis) to any ingredient of Quadracel or following any other diphtheria toxoid-, tetanus toxoid-, or pertussis antigen-containing vaccine, or
inactivated poliovirus vaccine; encephalopathy within 7 days of a previous dose of a
pertussis antigen-containing vaccine</span>,
        ISIFile: "quadracel-ISI.pdf",
        name: "Quadracel",
        PIUrl: "https://www.vaccineshoppe.com/QUADRACELPI",
        PIOverride: <span>Prescribing Information for<br/>Quadracel (<a class='prescribeFooterLink' href='https://www.vaccineshoppe.com/QuadracelveroPI' target='top'>49281-564-10/15</a> and <a class='prescribeFooterLink' href='https://www.vaccineshoppe.com/QuadracelPI' target='top'>49281-562-10</a>)</span>,
        tradeAndTrue: <span>QUADRACEL<sup>&reg;</sup> (Diphtheria and Tetanus Toxoids and Acellular Pertussis Adsorbed and Inactivated Poliovirus Vaccine)</span>});
    vaccines.set("RECOMBIVAX", {
        imgName:"recombivax.png",
        name: "Recombivax",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=b5bd99e4-569d-48d5-ba75-16e69f8c409a&type=display",
        tradeAndTrue: <span>RECOMBIVAX HB<sup>&reg;</sup> [Hepatitis B Vaccine (Recombinant)]</span>});
    vaccines.set("ROTARIX", {
        imgName:"rotarix.png",
        name: "Rotarix",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=f3182470-1965-4e20-dbaf-e3506f893ea5&type=display ",
        tradeAndTrue: <span>ROTARIX<sup>&reg;</sup> (Rotavirus Vaccine, Live, Oral)</span>});
    vaccines.set("ROTATEQ", {
        imgName:"rotateq.png",
        name: "Rotateq",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=aaf3b24e-85fd-43ee-b657-2ee4df312ec3&type=display ",
        tradeAndTrue: <span>ROTATEQ<sup>&reg;</sup> (Rotavirus Vaccine, Live, Oral, Pentavalent)</span>});
    vaccines.set("VARIVAX", {
        imgName:"varivax.png",
        name: "Varivax",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=524cf052-e90e-4595-af0a-608edbe9bd31&type=display",
        tradeAndTrue: <span>VARIVAX<sup>&reg;</sup> (Varicella Virus Vaccine Live)</span>});
    vaccines.set("VAQTA", {
        imgName:"vaqta.png",
        name: "Vaqta",
        PIUrl: "https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=89191ae9-7f2b-4206-8397-bf7fce3436ac&type=display ",
        tradeAndTrue: <span>VAQTA<sup>&reg;</sup> (Hepatitis A Vaccine, Inactivated)</span>});
    vaccines.set("VAXELIS", {
        imgName:"vaxelis.png",
        name: "Vaxelis",
        isSanofi: true,
        IndicationSpecial: <span>a vaccine</span>,
        IndicationBlurb: <span>active immunization to prevent diphtheria, tetanus, pertussis,
        poliomyelitis, hepatitis B, and invasive disease due to <i>Haemophilus influenzae</i> type b (Hib). VAXELIS
        is approved for use as a 3-dose series in children 6 weeks through 4 years of age (prior to the 5<sup>th</sup> birthday).</span>,
        ISIBlurb: <span>Do not administer VAXELIS to anyone with a history of severe allergic reaction to a previous dose of
VAXELIS, any ingredient of VAXELIS, or any other diphtheria toxoid, tetanus toxoid, pertussis-containing
vaccine, inactivated poliovirus vaccine, hepatitis B vaccine, or Hib vaccine. Do not administer VAXELIS to anyone with a history
of</span>,
        ISIFile: "vaxelis-ISI.pdf",
        PIUrl: "https://www.merck.com/product/usa/pi_circulars/v/vaxelis/vaxelis_pi.pdf",
        tradeAndTrue: <span>VAXELIS<sup>&reg;</sup> (Diphtheria and Tetanus Toxoids and Acellular Pertussis,
Inactivated Poliovirus, Haemophilus b Conjugate and Hepatitis B Vaccine)</span>});

    return vaccines;
}
