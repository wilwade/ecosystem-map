import React from "react";
import { ProjectInfo } from "types";
import { round } from "../utils/helper";

function TwitterLogo() {
  return (
    <svg
      version="1.1"
      viewBox="0 0 16 16"
      height="15"
      width="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z" />
    </svg>
  );
}

function DiscordLogo() {
  return (
    <svg
      version="1.1"
      viewBox="0 0 127.14 96.36"
      height="15"
      width="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
      </svg>
  );
}

function GithubLogo() {
  return (
    <svg
      version="1.1"
      viewBox="0 0 16 16"
      height="15"
      width="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z" />
    </svg>
  );
}

function BlogLogo() {
  return (
    <svg version="1.1" viewBox="0 0 975 725" height="15" width="15">
      <path d="M320 320H192c-64 0-64 64-64 64h256C384 384 384 320 320 320zM320 448H192c-64 0-64 64-64 64h256C384 512 384 448 320 448zM320 576H192c-64 0-64 64-64 64h256C384 640 384 576 320 576zM768 320H640c-64 0-64 64-64 64h256C832 384 832 320 768 320zM768 448H640c-64 0-64 64-64 64h256C832 512 832 448 768 448zM768 576H640c-64 0-64 64-64 64h256C832 640 832 576 768 576zM608 160c-64 0-128 64-128 64s-64-64-128-64C192 160 0 224 0 224v608l448-32c0 0-1.281 32 31.375 32C512 832 512 800 512 800l448 32V224C960 224 768 160 608 160zM448 768c0 0 1.031-64-64-64-193.031 0-320 64-320 64V256c0 0 128-32 256-32 64 0 128 64 128 64V768zM896 736c0 0-97-32-320-32-62 0-64 64-64 64V288c0 0 64-64 128-64 128 0 256 64 256 64V736z" />
    </svg>
  );
}

function AppLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="15px" width="15px" version="1.1" viewBox="0 0 512 512">
      <g>
        <g>
          <path d="M410.8,12H103.2C74.4,12,51,35.5,51,64.3v385.4c0,28.9,23.4,52.3,52.2,52.3h307.5c28.8,0,52.2-23.5,52.2-52.3V64.3    C463,35.5,439.6,12,410.8,12z M422.2,449.7c0,6.3-5.1,11.5-11.5,11.5H103.2c-6.3,0-11.5-5.2-11.5-11.5V64.3    c0-6.3,5.1-11.5,11.5-11.5h307.5c6.3,0,11.5,5.2,11.5,11.5V449.7z"/>
          <path d="m315.7,209.7c-9.4-6.2-22-3.6-28.3,5.8l-10,15.2v-114.9c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v114.9l-10-15.2c-6.2-9.4-18.9-12-28.3-5.8-9.4,6.2-12,18.9-5.8,28.3l47.4,71.9c3.8,5.7 10.2,9.2 17,9.2 6.8,0 13.2-3.4 17-9.2l47.4-71.9c6.4-9.4 3.8-22.1-5.6-28.3z"/>
          <path d="m272.7,401.2h-31.4c-11.3,0-20.4,9.1-20.4,20.4s9.1,20.4 20.4,20.4h31.4c11.3,0 20.4-9.1 20.4-20.4s-9.1-20.4-20.4-20.4z"/>
        </g>
      </g>
    </svg>
  )
}

export default function Metrics({ project }: { project: ProjectInfo }) {
  const twitter = React.useMemo(
    () =>
      project.metrics?.twitter?.length
        ? project.metrics.twitter[0]?.value
        : undefined,
    [project.metrics.twitter],
  );

  const blog = React.useMemo(
    () =>
      project.metrics?.blog?.length
        ? project.metrics.blog[0]?.value
        : undefined,
    [project.metrics.blog],
  );

  const discord = React.useMemo(
    () =>
      project.metrics?.discord?.length
        ? project.metrics.discord[0]?.value
        : undefined,
    [project.metrics.discord],
  );

  const github = React.useMemo(
    () =>
      project.metrics?.github?.length
        ? project.metrics.github[0]?.value
        : undefined,
    [project.metrics.github],
  );

  const youtube = React.useMemo(
    () =>
      project.metrics?.youtube?.length
        ? project.metrics.youtube[0]?.value
        : undefined,
    [project.metrics.youtube],
  );

  const appDownloads = React.useMemo(
    () =>
      project.metrics?.app_downloads?.length
        ? project.metrics.app_downloads[0]?.value
        : undefined,
    [project.metrics.app_downloads],
  );

  const education = React.useMemo(() => {
    if (twitter === undefined || blog === undefined || youtube === undefined || discord === undefined) {
      return undefined;
    }

    return twitter > 0
      ? round(((blog + youtube + discord) / twitter) * 100, 100)
      : undefined;
  }, [blog, youtube, twitter, discord]);

  const techEngagement = React.useMemo(() => {
      const s = Number(blog) + Number(youtube) + Number(discord);
      return s > 0 ? round((Number(github) / s) * 100, 100) : undefined;
  }, [github, blog, youtube, discord]);

  const engagement = React.useMemo(() => Number(twitter) > 0
      ? round((Number(appDownloads) / Number(twitter)) * 100, 100)
      : undefined, [appDownloads, twitter, github, blog, youtube, discord]);

  return (
    <div className="metrics-panel">
      <div className="roboto-medium">Reach</div>
      <div className="roboto-medium">Engagement</div>
      <div className="roboto-medium">Readiness</div>
      <div>
        {project.web.twitter ?
          <a href={`https://x.com/${project.web.twitter}`}><TwitterLogo /> {twitter ?? "—"}</a> :
          <><TwitterLogo /> {twitter ?? "—"}</>
        }
      </div>
      <div />
      <div>{project.readiness.business ?? "—"}</div>

      <div>
        <BlogLogo /> {blog ?? "—"}
      </div>
      <div style={{ opacity: 0.5 }}>{education ? `${education}%` : "—"}</div>
      <div>{project.readiness.technology ?? "—"}</div>

      <div>
        <GithubLogo /> {github ?? "—"}
      </div>
      <div style={{ opacity: 0.5 }}>{techEngagement ? `${techEngagement}%` : "—"}</div>
      <div />
      {appDownloads ? (
        <>
          <div><AppLogo /> {appDownloads ?? "—"}</div>
          <div style={{ opacity: 0.5 }}>{engagement ? `${engagement}%` : "—"}</div>
          <div />
        </>
      ) : undefined}
      
    </div>
  );
}
