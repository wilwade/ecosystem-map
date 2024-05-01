data.map((d) => ({
    name: d.Name,
    category: d.Category ? d.Category.split(",") : [],
    description: d.Description,
    readiness: { business: d["Business readiness"] ? d["Business readiness"] : undefined, technology: d["Tech readiness"] ? d["Tech readiness"] : undefined },
    target_audience: d["Provisional customer"] ? d["Provisional customer"].split(",") : [],
    ecosystem: d.Ecosystem ? d.Ecosystem.split(",") : [],
    layer: d.Type ? d.Type.split(",") : ["None"],
    web: {
        logo: d.Logo ? `${d.Name.replace("/", "-")}.jpg` : "default.png",
        site: d.URL,
        twitter: d["Twitter handle"] ? d["Twitter handle"].replace("@", "") : undefined,
        discord: d["Discord handle"] ? d["Discord handle"] : undefined,
        contact: d["contact mail"] ? d["contact mail"] : undefined,
    },
    metrics: {
        twitter: [
            { date: "2023-12-31", value: d["X2023"] },
            { date: "2022-12-31", value: d["X2022"] }
        ].filter((v) => v.value || v.value === 0),
        youtube: [{ date: "2023-12-31", value: d.Youtube }].filter((v) => v.value || v.value === 0),
        github: [{ date: "2023-12-31", value: d.Github }].filter((v) => v.value || v.value === 0),
        discord: [{ date: "2023-12-31", value: d.Discord }].filter((v) => v.value || v.value === 0),
        blog: [{ date: "2023-12-31", value: d.Blog }].filter((v) => v.value || v.value === 0),
        app_downloads: [{ date: "2023-12-31", value: d["App downloads"] }].filter((v) => v.value || v.value === 0),
        
    }
    
}))
