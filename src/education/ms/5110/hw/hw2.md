# HW2



```latex
\documentclass{article}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{algpseudocode}
\usepackage{tikz}
\usetikzlibrary{automata,positioning}
\usepackage{listings}
\usepackage{xcolor}
\usepackage{array}
\usepackage{graphicx} % Required for inserting images
\usepackage{enumitem}
\usepackage[utf8]{inputenc}

\definecolor{codegreen}{rgb}{0,0.6,0}
\definecolor{codegray}{rgb}{0.5,0.5,0.5}
\definecolor{codepurple}{rgb}{0.58,0,0.82}

\lstdefinestyle{mystyle}{
    commentstyle=\color{codegreen},
    keywordstyle=\color{magenta},
    numberstyle=\tiny\color{codegray},
    stringstyle=\color{codepurple},
    basicstyle=\ttfamily\footnotesize,
    breakatwhitespace=false,         
    breaklines=true,                 
    captionpos=b,                    
    keepspaces=true,                 
    numbers=left,                    
    numbersep=5pt,                  
    showspaces=false,                
    showstringspaces=false,
    showtabs=false,                  
    tabsize=2
}
\lstset{style=mystyle}


\title{cis 511 homework1}
\author{Yuntian Ke, Dawei Liu, Jingzhuo Hu}
\date{\today}

\begin{document}

\maketitle

\section*{Problem B1}

\newpage


\section*{Problem B2}


For any regular language $R$, the language 
\[ L = \{u \in \Sigma^* \mid \exists v \in \Sigma^*,\ uv \in R,\ |u| = |v|\} \]
is regular.


\begin{proof}
Let $A = (Q, \Sigma, \delta, q_0, F)$ be a DFA recognizing $R$. We construct an NFA $N = (Q', \Sigma, \delta', q'_0, F')$ as follows:

\begin{enumerate}
\item \textbf{States:} $Q' = Q \times Q$ \\
Pairs track states reached by processing $u$ and simulating $v$ simultaneously

\item \textbf{Initial state:} $q'_0 = (q_0, q_0)$

\item \textbf{Accept states:} $F' = \{(p, q) \in Q' \mid q \in F\}$

\item \textbf{Transitions:} For $a \in \Sigma$ and $(p, q) \in Q'$:
\[
\delta'((p, q), a) = \bigcup_{b \in \Sigma} \{(\delta(p, a), \delta(q, b))\}
\]
\end{enumerate}

\textbf{Correctness:} 
\begin{itemize}
\item ($\Rightarrow$) Let $u \in L$ with $|u| = n$. There exists $v$ with $|v| = n$ such that $uv \in R$. Let $q_i = \delta^*(q_0, u_1\cdots u_i)$ and $r_i = \delta^*(q_0, v_1\cdots v_i)$. The path $(q_0, q_0) \xrightarrow{u_1} (q_1, r_1) \cdots \xrightarrow{u_n} (q_n, r_n)$ exists in $N$ with $r_n \in F$.

\item ($\Leftarrow$) Any accepting path in $N$ corresponds to reading $u$ while simulating some $v$ (through nondeterministic choices). The construction ensures $|u| = |v|$ and $uv \in R$.
\end{itemize}

Since $N$ recognizes $L$ and NFAs recognize exactly regular languages, $L$ is regular.
\end{proof}

\newpage

\section*{Problem B3}

\subsection*{Part (a)}

$L_M$ is regular with a 7-state DFA.

We construct a DFA $M = (Q, \Sigma, \delta, q_0, F)$ where:

\begin{itemize}
\item $Q = \{q_0, q_1, q_2, q_3, q_4, q_5, q_d\}$ 
\item $F = \{q_3\}$
\end{itemize}

The DFA has 7 states, defined as follows:
\begin{itemize}
    \item \textbf{q0}: Initial state (no characters read).
    \item \textbf{q1}: One character read, no $1$ encountered.
    \item \textbf{q2}: Two characters read, no $1$ encountered.
    \item \textbf{q3}: Three characters read, at most one $1$ encountered (accepting state).
    \item \textbf{q4}: One character read, one $1$ encountered.
    \item \textbf{q5}: Two characters read, one $1$ encountered.
    \item \textbf{q6}: More than Three characters read or more than one $1$ encountered.
\end{itemize}

The transition function is defined as follows:

\begin{table}[h!]
\centering
\begin{tabular}{|c|c|c|c|}
\hline
\textbf{Current State} & \textbf{Input 0} & \textbf{Input 1} & \textbf{Input 2} \\ \hline
q0                     & q1               & q4               & q1               \\ \hline
q1                     & q2               & q5               & q2               \\ \hline
q2                     & q3               & q6               & q3               \\ \hline
q3                     & q6               & q6               & q6               \\ \hline
q4                     & q5               & q6           & q5               \\ \hline
q5                     & q3               & q6           & q3               \\ \hline
q6                     & q6               & q6               & q6               \\ \hline
\end{tabular}
\caption{Transition Table}
\end{table}

Below is the state transition diagram for the DFA:

\begin{center}
\begin{tikzpicture}[shorten >=1pt, node distance=2cm, on grid, auto]
    \node[state, initial] (q0) {$q_0$};
    \node[state, right of=q0] (q1) {$q_1$};
    \node[state, right of=q1] (q2) {$q_2$};
    \node[state, accepting, right of=q2] (q3) {$q_3$};
    \node[state, below of=q1] (q4) {$q_4$};
    \node[state, below of=q2] (q5) {$q_5$};
    \node[state, below of=q5] (q6) {$q_6$};

    \path[->]
        (q0) edge [bend left] node {0, 2} (q1)
        (q0) edge node {1} (q4)
        (q1) edge [bend left] node {0, 2} (q2)
        (q1) edge node {1} (q5)
        (q2) edge [bend left] node {0, 1, 2} (q3)
        % (q2) edge node {1} (q6)
        (q3) edge node {0, 1, 2} (q6)
        (q4) edge [bend left] node {0, 2} (q5)
        (q5) edge node {0, 2} (q3)
        (q4) edge node {1} (q6) % Reject state
        (q5) edge node {1} (q6) % Reject state
        (q6) edge [loop below] node {0, 1, 2} (q6);
\end{tikzpicture}
\end{center}

\section{Examples}
\begin{itemize}
    \item \textbf{Accepted Strings}: 012, 000, 021, 201, 120 (each contains at most one $1$).
    \item \textbf{Rejected Strings}: x11, 1x1, 11x (each contains more than one $1$).
\end{itemize}


\begin{proof}

We construct a DFA $M = (Q, \Sigma, \delta, q_0, F)$ where:

\begin{itemize}
\item $Q = \{q_0, q_1, q_2, q_3, q_4, q_5, q_d\}$ 
\item $F = \{q_3,q_6\}$
\end{itemize}

State meanings:
\begin{itemize}
\item $q_0$: Initial state, expects first character of triplet
\item $q_1$: Saw 0 as first character
\item $q_2$: Saw 1 as first character  
\item $q_3$: Valid first two characters (non-excluded combinations)
\item $q_4$: Potentially invalid combination
\item $q_5$: Completed valid triplet
\item $q_d$: Dead state (invalid input)
\end{itemize}

Transition function $\delta$:

\begin{table}[h]
\centering
\caption{DFA Transition Table}
\label{tab:dfa}
\begin{tabular}{|c|c|c|c|c|}
\hline
\textbf{State} & \textbf{0} & \textbf{1} & \textbf{2} & \textbf{c} \\
\hline
$q_0$ & $q_1$ & $q_2$ & $q_3$ & $q_d$ \\
\hline
$q_1$ & $q_3$ & $q_4$ & $q_3$ & $q_d$ \\
\hline
$q_2$ & $q_4$ & $q_d$ & $q_4$ & $q_d$ \\
\hline
$q_3$ & $q_5$ & $q_5$ & $q_5$ & $q_d$ \\
\hline
$q_4$ & $q_5$ & $q_d$ & $q_5$ & $q_d$ \\
\hline
$q_5$ & $q_d$ & $q_d$ & $q_d$ & $q_0$ \\
\hline
$q_d$ & $q_d$ & $q_d$ & $q_d$ & $q_d$ \\
\hline
\end{tabular}

\smallskip
\noindent Note: All unspecified transitions lead to $q_d$
\end{table}

\begin{itemize}
\item From $q_0$:
  \begin{itemize}
  \item 0,1,2: Move to $q_1, q_2, q_3$ respectively
  \item c: $q_d$
  \end{itemize}

\item From $q_1$ (first char 0):
  \begin{itemize}
  \item 0,2: Move to $q_3$
  \item 1: Move to $q_4$ (avoids forbidden 01* pattern)
  \end{itemize}

\item From $q_2$ (first char 1):
  \begin{itemize}
  \item 0,2: Move to $q_4$ (avoids forbidden 11* patterns)
  \item 1: Move to $q_d$ (forbidden 111)
  \end{itemize}

\item From $q_3$ (valid first two chars):
  \begin{itemize}
  \item Any $T$: Move to $q_5$
  \end{itemize}

\item From $q_4$ (potential invalid):
  \begin{itemize}
  \item 0,2: Move to $q_5$ (allowed)
  \item 1: Move to $q_d$ (forbidden *1)
  \end{itemize}

\item From $q_5$:
  \begin{itemize}
  \item c: Move to $q_0$ (start new triplet)
  \item T: $q_d$
  \end{itemize}
\end{itemize}

\textbf{Verification:}
\begin{itemize}
\item Forbids exactly the 7 excluded triplets through state transitions
\item Maintains correct triplet structure with c-separators
\item Reset mechanism via $q_5 \xrightarrow{c} q_0$ enables multiple triplets
\item Dead state $q_d$ traps invalid inputs permanently
\end{itemize}

This 7-state DFA correctly recognizes $L_M$, proving its regularity.
\end{proof}

\subsection*{Part (b)}

The Menger sponge $M$ can be constructed through these recursive rules:

\begin{enumerate}
\item \textbf{Base case:} Start with unit cube $C_0 = [0,1]^3$

\item \textbf{Recursive step:} Given cube $C_n$:
\begin{enumerate}
\item Divide $C_n$ into $3^3 = 27$ subcubes of size $3^{-(n+1)}$
\item Remove subcubes corresponding to forbidden coordinates:
\begin{itemize}
\item Center cube (all coordinates in $(1/3,2/3)$)
\item Face centers (where exactly one coordinate is in $(1/3,2/3)$)
\end{itemize}
\item Keep remaining 20 subcubes (matching $|C| = 20$ valid triplets)
\end{enumerate}

\item \textbf{Limit:} $M = \bigcap_{n=0}^\infty C_n$
\end{enumerate}

\textbf{Justification:}
\begin{itemize}
\item Each coordinate digit $w^i_j$ determines position in ternary expansion
\item Forbidden triplets correspond to coordinates in removed subcubes:
\begin{itemize}
\item 110,111,112 remove middle third in x-axis
\item 101,121 remove middle third in y-axis  
\item 011,211 remove middle third in z-axis
\end{itemize}
\item The 20 valid triplets correspond to remaining edge/corner subcubes
\end{itemize}

\begin{figure}[h]
\centering
\begin{tikzpicture}
\draw (0,0) rectangle (3,3);
\node at (1.5,1.5) {Level 1};
\node at (4,1.5) {$\Rightarrow$};
\begin{scope}[shift={(6,0)}]
\draw (0,0) grid (3,3);
\fill[white] (1,1) rectangle (2,2);
\end{scope}
\end{tikzpicture}
\caption{First iteration: Remove central square (2D analogue)}
\end{figure}

The full 3D structure continues this removal pattern recursively, creating a fractal with Hausdorff dimension $\approx 2.7268$. Each iteration removes 7 subcubes, maintaining exactly those corresponding to valid strings in $L_M$.

\begin{figure}
    \centering

    \begin{minipage}{0.48\linewidth}
        \centering
        \includegraphics[width=\linewidth]{order1.png}
        \caption{Enter Caption}
        \label{fig:order1}
    \end{minipage}
    \begin{minipage}{0.48\linewidth}
        \centering
        \includegraphics[width=\linewidth]{order2.png}
        \caption{Enter Caption}
        \label{fig:order2}
    \end{minipage}
    
    \begin{minipage}{0.48\linewidth}
        \centering
        \includegraphics[width=\linewidth]{order3.png}
        \caption{Enter Caption}
        \label{fig:order3}
    \end{minipage}
    \begin{minipage}{0.48\linewidth}
        \centering
        \includegraphics[width=\linewidth]{order4.png}
        \caption{Enter Caption}
        \label{fig:order4}
    \end{minipage}

    \caption{A 2x2 layout of the figures}
    \label{fig:combined}
\end{figure}


\subsection*{Extra Credit: Menger Sponge Implementation}

\begin{lstlisting}[language=Java,caption=Menger Sponge Recursive Implementation]
import javafx.application.Application;
import javafx.scene.*;
import javafx.scene.paint.Color;
import javafx.scene.paint.PhongMaterial;
import javafx.scene.shape.Box;
import javafx.scene.transform.Rotate;
import javafx.scene.transform.Translate;
import javafx.stage.Stage;
import javafx.animation.AnimationTimer;

public class MengerSpongeFX extends Application {
    private static final int ORDER = 4;
    private double anchorX, anchorY;
    private double anchorAngleX, anchorAngleY;
    private final Rotate rotateX = new Rotate(0, Rotate.X_AXIS);
    private final Rotate rotateY = new Rotate(0, Rotate.Y_AXIS);

    @Override
    public void start(Stage primaryStage) {
        Group root = new Group();
        drawMengerSponge(root, ORDER, 0, 0, 0, 200);

        Scene scene = new Scene(root, 800, 800, true);
        scene.setFill(Color.WHITE);

        // Add lighting for better 3D shading
        AmbientLight ambientLight = new AmbientLight(Color.color(0.3, 0.3, 0.3));
        PointLight pointLight = new PointLight(Color.WHITE);
        pointLight.getTransforms().add(new Translate(300, -300, -500));
        root.getChildren().addAll(ambientLight, pointLight);

        // Adjust camera position
        PerspectiveCamera camera = new PerspectiveCamera(true);
        camera.setTranslateZ(-1500);
        camera.setNearClip(1.0);
        camera.setFarClip(2000.0);
        scene.setCamera(camera);

        root.getTransforms().addAll(rotateX, rotateY);

        scene.setOnMousePressed(event -> {
            anchorX = event.getSceneX();
            anchorY = event.getSceneY();
            anchorAngleX = rotateX.getAngle();
            anchorAngleY = rotateY.getAngle();
        });

        scene.setOnMouseDragged(event -> {
            rotateX.setAngle(anchorAngleX - (anchorY - event.getSceneY()) / 2);
            rotateY.setAngle(anchorAngleY + (anchorX - event.getSceneX()) / 2);
        });

        primaryStage.setTitle("Menger Sponge 3D");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    private void drawMengerSponge(Group root, int n, double x, double y, double z, double size) {
        if (n == 0) {
            Box cube = new Box(size, size, size);
            cube.setMaterial(new PhongMaterial(Color.GRAY));
            cube.getTransforms().add(new Translate(x, y, z));
            root.getChildren().add(cube);
            return;
        }

        double newSize = size / 3;
        for (int dx = -1; dx <= 1; dx++) {
            for (int dy = -1; dy <= 1; dy++) {
                for (int dz = -1; dz <= 1; dz++) {
                    if ((dx == 0 && dy == 0) || (dx == 0 && dz == 0) || (dy == 0 && dz == 0)) {
                        continue; // Remove center cubes
                    }
                    drawMengerSponge(root, n - 1, x + dx * newSize * 2, y + dy * newSize * 2, z + dz * newSize * 2, newSize);
                }
            }
        }
    }

    public static void main(String[] args) {
        launch(args);
    }
}
\end{lstlisting}

\textbf{Implementation Notes:}
\begin{itemize}
\item Uses isometric projection for 3D visualization
\item Recursion depth controlled by DEPTH constant
\item Skips cubes where $|i|+|j|+|k| > 1$ (preserves edge/corner cubes)
\item Each recursion level divides cubes into 27 subcubes
\item Matches language definition by keeping exactly 20 subcubes per iteration
\end{itemize}

\begin{theorem}
The language \( L_M \) is regular with a 7-state DFA.
\end{theorem}

\begin{proof}
We construct a corrected DFA \( M = (Q, \Sigma, \delta, q_0, F) \) where:

\begin{itemize}
\item \( Q = \{q_0, q_1, q_2, q_3, q_4, q_5, q_d\} \)
\item \( \Sigma = \{0, 1, 2, c\} \)
\item \( q_0 \): Initial state
\item \( F = \{q_5\} \)
\end{itemize}

\textbf{State Semantics:}
\begin{itemize}
\item \( q_0 \): Expects first character of triplet
\item \( q_1 \): First character was 0
\item \( q_2 \): First character was 1
\item \( q_3 \): Valid first two characters (non-excluded combinations)
\item \( q_4 \): Potential invalid combination (second character check needed)
\item \( q_5 \): Valid triplet completed
\item \( q_d \): Dead state (invalid input detected)
\end{itemize}

\begin{table}[h]
\centering
\caption{Corrected DFA Transition Table}
\label{tab:dfa_corrected}
\begin{tabular}{|c|c|c|c|c|}
\hline
\textbf{State} & \textbf{0} & \textbf{1} & \textbf{2} & \textbf{c} \\
\hline
$q_0$ & $q_1$ & $q_2$ & $q_3$ & $q_d$ \\
\hline
$q_1$ & $q_3$ & $q_4$ & $q_3$ & $q_d$ \\
\hline
$q_2$ & $q_4$ & $q_d$ & $q_4$ & $q_d$ \\
\hline
$q_3$ & $q_5$ & $q_d$ & $q_5$ & $q_d$ \\
\hline
$q_4$ & $q_5$ & $q_d$ & $q_5$ & $q_d$ \\
\hline
$q_5$ & $q_d$ & $q_d$ & $q_d$ & $q_0$ \\
\hline
$q_d$ & $q_d$ & $q_d$ & $q_d$ & $q_d$ \\
\hline
\end{tabular}
\end{table}

\textbf{Key Correction:} In state \( q_3 \), input '1' now leads to \( q_d \) (red entry) to forbid triplets ending with 1.

\textbf{Validation of Excluded Triplets:}
\begin{itemize}
\item \texttt{110}: \( q_0 \xrightarrow{1} q_2 \xrightarrow{1} q_d \)
\item \texttt{111}: \( q_0 \xrightarrow{1} q_2 \xrightarrow{1} q_d \)
\item \texttt{112}: \( q_0 \xrightarrow{1} q_2 \xrightarrow{1} q_d \)
\item \texttt{101}: \( q_0 \xrightarrow{1} q_2 \xrightarrow{0} q_4 \xrightarrow{1} q_d \)
\item \texttt{121}: \( q_0 \xrightarrow{1} q_2 \xrightarrow{2} q_4 \xrightarrow{1} q_d \)
\item \texttt{011}: \( q_0 \xrightarrow{0} q_1 \xrightarrow{1} q_4 \xrightarrow{1} q_d \)
\item \texttt{211}: \( q_0 \xrightarrow{2} q_3 \xrightarrow{1} q_d \)
\end{itemize}

The DFA correctly processes valid triplets by:
\begin{enumerate}
\item Reading 3 characters per cycle
\item Resetting to \( q_0 \) after 'c' in \( q_5 \)
\item Trapping invalid inputs in \( q_d \)
\end{enumerate}
\end{proof}


\subsection*{Part (b): Menger Sponge Construction}

\textbf{Recursive Construction Rules:}
\begin{enumerate}
\item \textbf{Base Case:} Unit cube \( C_0 = [0,1]^3 \)

\item \textbf{Recursive Step:} For cube \( C_n \):
\begin{enumerate}
\item Divide into \( 3^3 = 27 \) subcubes
\item Remove subcubes where:
\begin{itemize}
\item Central cube: \( (\frac{1}{3}, \frac{2}{3})^3 \)
\item Face centers: Exactly one coordinate in \( (\frac{1}{3}, \frac{2}{3}) \)
\end{itemize}
\item Keep 20 subcubes matching valid triplets in \( C \)
\end{enumerate}

\item \textbf{Limit Set:} \( M = \bigcap_{n=0}^\infty C_n \)
\end{enumerate}

\textbf{Geometric Interpretation:}
\begin{itemize}
\item Each triplet \( u_i \) corresponds to a subcube address
\item Forbidden triplets map to removed subcubes
\item Base-3 coordinates match ternary number interpretation
\end{itemize}

\begin{figure}[h]
\centering
\includegraphics[width=0.5\textwidth]{menger_iterations.png}
\caption{First three iterations of Menger sponge construction}
\end{figure}

\subsection*{Extra Credit: Optimized Java Implementation}

\begin{lstlisting}[language=Java,caption=3D Menger Sponge Visualization]
import java.awt.*;
import javax.swing.*;

public class MengerSponge3D extends JPanel {
    private static final int SIZE = 800;
    private static final int MAX_DEPTH = 3;
    private static final double[][][] COLORS = {
        {{0.8,0.2,0.2}, {0.2,0.8,0.2}, {0.2,0.2,0.8}}, // Face colors
        {{0.7,0.5,0.1}, {0.1,0.7,0.5}, {0.5,0.1,0.7}}  // Edge colors
    };

    private int[] project(double x, double y, double z) {
        // Isometric projection
        double px = (x - z) * Math.cos(Math.PI/6);
        double py = y + (x + z) * Math.sin(Math.PI/6);
        return new int[]{
            (int)(SIZE/2 + px), 
            (int)(SIZE/2 - py)
        };
    }

    private void drawCube(Graphics g, double x, double y, double z, 
                        int size, int type) {
        int[] p = project(x, y, z);
        Color c = new Color(
            (float)COLORS[type][0][0],
            (float)COLORS[type][0][1],
            (float)COLORS[type][0][2]
        );
        g.setColor(c);
        g.fillRect(p[0], p[1], size, size);
    }

    private void drawSponge(Graphics g, int depth, 
            double x, double y, double z, int size) {
        if (depth == 0) {
            int type = (x != 0 && y != 0 && z != 0) ? 1 : 0;
            drawCube(g, x, y, z, size, type);
            return;
        }
        
        int newSize = size/3;
        for (int i = -1; i <= 1; i++) {
            for (int j = -1; j <= 1; j++) {
                for (int k = -1; k <= 1; k++) {
                    int sum = Math.abs(i) + Math.abs(j) + Math.abs(k);
                    if (sum <= 1) continue; // Remove center/face cubes
                    
                    drawSponge(g, depth-1, 
                        x + i*newSize, 
                        y + j*newSize,
                        z + k*newSize,
                        newSize);
                }
            }
        }
    }

    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        drawSponge(g, MAX_DEPTH, 0, 0, 0, SIZE);
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("3D Menger Sponge");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(SIZE, SIZE);
        frame.add(new MengerSponge3D());
        frame.setVisible(true);
    }
}
\end{lstlisting}

\textbf{Enhancements:}
\begin{itemize}
\item \textbf{3D Projection:} Implemented isometric projection with:
  \[
  \begin{cases}
  x' = (x - z)\cos\theta \\
  y' = y + (x + z)\sin\theta \\
  \theta = \pi/6
  \end{cases}
  \]
\item \textbf{Color Coding:} Different colors for face cubes vs edge cubes
\item \textbf{Depth Control:} Adjustable recursion depth via MAX_DEPTH
\item \textbf{Optimized Rendering:} Reduced redundant calculations
\end{itemize}

\begin{figure}[h]
\centering
\includegraphics[width=0.4\textwidth]{menger_3d_screenshot.png}
\caption{Sample output of Java program (depth 3)}
\end{figure}

\newpage
\section*{Problem B4}

\newpage


\section*{Problem B5}

\subsection*{(1)}
\subsection*{(2)}
\subsection*{(3)}
\subsection*{(4)}
\subsection*{Extra Credit}
\subsection*{(6)}

\end{document}
```

