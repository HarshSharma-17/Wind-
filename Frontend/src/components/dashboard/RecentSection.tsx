import type { Project } from "../../types/project";
import type { HistoryItem } from "../../types/history";
import { useNavigate } from "react-router-dom";
interface Props {
    latestProject: Project | null;
    latestGeneration: HistoryItem | null;
}
const RecentSection = ({
    
    latestProject,
    latestGeneration,
}: Props) => {
    const navigate = useNavigate();
    return (
        <div className="recent-section">

            <div
                className="recent-card"
                onClick={() => {
                    if (latestProject) {
                        navigate("/projects");
                    }
                }}
            >
                <h3>Latest Project</h3>

                <p>
                    {latestProject
                        ? latestProject.title
                        : "No Projects Yet"}
                </p>
            </div>

            <div
                className="recent-card"
                onClick={() => {
                    if (latestGeneration) {
                        navigate("/history");
                    }
                }}
            >
                <h3>Latest Generation</h3>

                <p>
                    {latestGeneration
                        ? latestGeneration.prompt
                        : "No Generations Yet"}
                </p>
            </div>

        </div>
    );
};

export default RecentSection;