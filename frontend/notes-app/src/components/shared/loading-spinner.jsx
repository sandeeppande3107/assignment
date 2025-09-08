const LoadingSpinner = ({ size = 5, color = "white" }) => (
    <div className="flex items-center justify-center">
        <div className={`animate-spin rounded-full h-${size} w-${size} border-b-2 border-${color} mr-2`}></div>
    </div>
)

export default LoadingSpinner