import "../../styles/dashboard.css";

interface Props {
    totalProjects: number;
    totalGenerations: number;
}

const StatsSection = ({
    totalProjects,
    totalGenerations,
}: Props) => {
    return (
        <div className="dashboard-stats">

            <div className="stat-card">
                <h3>Total Projects</h3>
                <h1>{totalProjects}</h1>
            </div>

            <div className="stat-card">
                <h3>Total Generations</h3>
                <h1>{totalGenerations}</h1>
            </div>

        </div>
    );
};

export default StatsSection;