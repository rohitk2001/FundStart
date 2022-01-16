import { PieChart,Pie,Tooltip,ResponsiveContainer} from "recharts";

const Piesend = () => {
    const data = [
        {name:"XYZ",value:20},
        {name:"ABC",value:20},
        {name:"US",value:60},
    ]
    return(
        <div>
            <div className={"d-flex justify-content-center"}>
                <div className="p-2 col-example text-center">XYZ
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={95}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                </div>
                <div className="p-2 col-example text-center">XYZ
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={95}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                </div>
                <div className="p-2 col-example text-center">XYZ
                    <PieChart width={400} height={400}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={95}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
            <div className={"d-flex justify-content-center"}>
                    <div className="p-2 col-example text-center">XYZ
                        <PieChart  width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={95}
                                fill="#8884d8"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </div>
                    <div className="p-2 col-example text-center">XYZ
                        <PieChart  width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={95}
                                fill="#8884d8"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </div>
                    <div className="p-2 col-example text-center">XYZ
                        <PieChart  width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={95}
                                fill="#8884d8"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </div>
            </div>
            <div className={"d-flex justify-content-center"}>
                    <div className="p-2 col-example text-center">XYZ
                        <PieChart  width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={95}
                                fill="#8884d8"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </div>
                    <div className="p-2 col-example text-center">XYZ
                        <PieChart  width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={95}
                                fill="#8884d8"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </div>
                    <div className="p-2 col-example text-center">XYZ
                        <PieChart  width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={95}
                                fill="#8884d8"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </div>
            </div>
        </div>
    )
}
export default Piesend;
