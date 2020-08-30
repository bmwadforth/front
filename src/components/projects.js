import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, selectArticles } from '../slices/articleSummarySlice';
import moment from 'moment';
import { Alert, ROUTES } from '../App';
import { ICONS } from './common/icon';
import { Link } from 'react-router-dom';
import Loader from './common/loader';
import { fetchProjects } from '../slices/projectSummarySlice';

function ProjectItem({ project }) {
  return (
    <>
      <div className="project-item">
        <a href={`https://github.com/bmwadforth/${project.title}`}>
          <div className="project-title">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </div>
          {/*
          <div className="project-body">
            <p>Last Commit Data</p>
            <sub>{project.githubMeta.stats.additions} additions</sub>
            <sub>{project.githubMeta.stats.deletions} deletions</sub>
          </div>*/}
        </a>

        <div className="project-footer">
          <p>Last Commit Hash</p>
          <a href={`https://github.com/bmwadforth/${project.title}/commit/${project.githubMeta.hash}`}>
            <span>{project.githubMeta.hash}</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default function Projects() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.projectSummary);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="projects-container">
      <div className="projects">
        <div className="projects-title">
          <div className="projects-title-content">
            <Alert
              title="Projects"
              description="The perfect project plan is possible if one first documents a list of all the unknowns."
              status="transparent"
              icon={ICONS.BACK}
              iconLink={ROUTES.HOME}
            />
          </div>
        </div>
        {(() => {
          if (loading !== 'idle') return <Loader />;
          if (error)
            return (
              <Alert title="Error" description="An error occurred. Sorry :(" status="danger" icon={ICONS.DANGER} />
            );
          if (data.length === 0)
            return <Alert title="No Projects" description="Check back later" status="warning" icon={ICONS.WARNING} />;
          return (
            <div className="project-list">
              {data.map((project) => {
                return <ProjectItem key={project.id} project={project} />;
              })}
            </div>
          );
        })()}
      </div>
    </div>
  );
}
