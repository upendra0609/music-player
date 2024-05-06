import styles from "./ProgressCircle.module.css";

const Circle = ({ color, percentage, size, strokeWidth }) => {
  const radius = size / 2 - 30;
  const circumference = 2 * Math.PI * radius - 20;
  const strokePercentage =
    ((100 - Math.round(percentage)) * circumference) / 100;

  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePercentage !== circumference ? color : ""}
      strokeWidth={strokeWidth}
      strokeDasharray={circumference}
      strokeDashoffset={percentage ? strokePercentage : 0}
      strokeLinecap="round"
    />
  );
};

const ProgressCircle = ({ percentage, isPlaying, image, size, color }) => {
  return (
    <div className={styles.progressCircle}>
      <svg width={size} height={size}>
        <g>
          <Circle strokeWidth={"0.4rem"} color="#3B4F73" size={size} />
          <Circle
            strokeWidth={"0.6rem"}
            color={color}
            size={size}
            percentage={percentage}
          ></Circle>
        </g>
      </svg>
    </div>
  );
};

export default ProgressCircle;
