async function f(){
     const bs="public class BinarySearch {\n" +
     "    public static int binarySearch(int[] arr, int key) {\n" +
     "        int low = 0;\n" +
     "        int high = arr.length - 1;\n" +
     "        while (low <= high) {\n" +
     "            int mid = (low + high) / 2;\n" +
     "            if (arr[mid] < key) {\n" +
     "                low = mid + 1;\n" +
     "            } else if (arr[mid] > key) {\n" +
     "                high = mid - 1;\n" +
     "            } else {\n" +
     "                return mid;\n" +
     "            }\n" +
     "        }\n" +
     "        return -1;\n" +
     "    }\n" +
     "    public static void main(String[] args) {\n" +
     "        int[] array = {1, 2, 3, 4, 5};\n" +
     "        int key = 3;\n" +
     "        System.out.println(\"Element found at index: \" + binarySearch(array, key));\n" +
     "    }\n" +
     "}";
     const kd="public class KadanesAlgorithm {\n" +
     "    public static int maxSubArraySum(int[] arr) {\n" +
     "        int maxSoFar = arr[0];\n" +
     "        int maxEndingHere = arr[0];\n" +
     "        for (int i = 1; i < arr.length; i++) {\n" +
     "            maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);\n" +
     "            maxSoFar = Math.max(maxSoFar, maxEndingHere);\n" +
     "        }\n" +
     "        return maxSoFar;\n" +
     "    }\n" +
     "    public static void main(String[] args) {\n" +
     "        int[] array = {-2, 1, -3, 4, -1, 2, 1, -5, 4};\n" +
     "        System.out.println(\"Maximum subarray sum: \" + maxSubArraySum(array));\n" +
     "    }\n" +
     "}"
     const m="public class MaxElement {\n" +
     "    public static int max(int[] arr) {\n" +
     "        int max = arr[0];\n" +
     "        for (int i = 1; i < arr.length; i++) {\n" +
     "            if (arr[i] > max) {\n" +
     "                max = arr[i];\n" +
     "            }\n" +
     "        }\n" +
     "        return max;\n" +
     "    }\n" +
     "    public static void main(String[] args) {\n" +
     "        int[] array = {1, 2, 3, 4, 5};\n" +
     "        System.out.println(\"Max element: \" + max(array));\n" +
     "    }\n" +
     "}"
     const dsaData = [
     {
         Topic: 'Array',
         QA: [
             { question: 'Binary Search', answer: bs},
             { question: "Kadane's Algorithm", answer: kd },
             { question: 'Max Element in Array', answer: m },
         ],
     },
 ];
 await DsaModel.insertMany(dsaData);}
//  f();