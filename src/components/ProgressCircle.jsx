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
    // <div className={styles.progressCircle}>
    //   <svg width={size} height={size}>
    //     <g>
    //       <Circle strokeWidth={"0.4rem"} color="#3B4F73" size={size} />
    //       <Circle
    //         strokeWidth={"0.6rem"}
    //         color={color}
    //         size={size}
    //         percentage={percentage}
    //       ></Circle>
    //     </g>
    //     <def>
    //       <clipPath id="myCircle">
    //         <circle cx="50%" cy="50%" r={size / 2 - 30} fill="white" />
    //       </clipPath>
    //       <clipPath id="myInnerCircle">
    //         <circle cx="50%" cy="50%" r={size / 2 - 100} fill="#FFFFFF" />
    //       </clipPath>
    //     </def>
    //     <image
    //       className={isPlaying ? styles.active : ""}
    //       x={40}
    //       y={40}
    //       width={2 * (size / 2 - 40)}
    //       height={2 * (size / 2 - 40)}
    //       href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
    //       // href={image}
    //       clipPath="url(#myCircle)"
    //     />
    //     <image
    //       className={isPlaying ? styles.active : ""}
    //       x={100}
    //       y={100}
    //       width={2 * (size / 2 - 100)}
    //       height={2 * (size / 2 - 100)}
    //       // href={image}
    //       // clipPath={`url(#${styles.myInnerCircle})`}
    //       clipPath="url(#myInnerCircle)"
    //     />
    //   </svg>
    // </div>

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
        <defs>
          <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 30} fill="white" />
          </clipPath>
          <clipPath id="myInnerCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 100} fill="white" />
            <image
              href={image}
              width={size / 2 - 100}
              height={size / 2 - 100}
              clipPath="url(#myCircle)"
            />
          </clipPath>
        </defs>
        <image
          className={isPlaying ? styles.active : ""}
          x={40}
          y={40}
          width={2 * (size / 2 - 40)}
          height={2 * (size / 2 - 40)}
          href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
          clipPath="url(#myCircle)"
        />
        <image
          className={isPlaying ? styles.active : ""}
          x={100}
          y={100}
          width={2 * (size / 2 - 100)}
          height={2 * (size / 2 - 100)}
          href={image}
          clipPath="url(#myInnerCircle)"
        />
      </svg>
    </div>
  );
};

export default ProgressCircle;
