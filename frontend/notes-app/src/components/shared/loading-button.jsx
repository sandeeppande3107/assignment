const LoadingButton = ({
    children,
    loading = false,
    className = "",
    ...props
}) => (
    <button
        disabled={loading}
        className={`
            relative px-6 py-3 text-white rounded-lg
            transition-all duration-200 ease-in-out
            ${loading
                ? 'opacity-50 cursor-not-allowed'
                : 'opacity-100'
            }
            ${className}
          `}
        {...props}
    >
        {loading ? (
            <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                {children}
            </div>
        ) : <>{children}</>}
    </button>
)

export default LoadingButton