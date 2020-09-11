var custom = {
    loadTasks: function(numSubtasks) {
        /*
         * This function is called on page load and should implement the promise interface
         *
         * numSubtasks - int indicating what length array to return (how many subtasks this task should have)
         *
         * returns: if config.meta.aggregate is set to false, an array of objects with length config.meta.numTasks,
         * one object for each task; else, an object that will be made available to all subtasks
         */
        return $.get("").then(function() {
            return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        });
    },
    showTask: function(taskInput, taskIndex, taskOutput) {
        /*
         * This function is called when the experiment view is unhidden
         * or when the task index is changed
         *
         * taskInput - if config.meta.aggregate is false, the object in the array from loadTasks
         *   corresponding to subtask taskIndex; else, the input object from loadTasks
         * taskIndex - the number of the current subtask
         * taskOutput - a partially filled out task corresponding to the subtask taskIndex
         *   If config.meta.aggregate is set to false, this is the results object for the current
         *   subtask. If config.meta.aggregate is set to true, this is the results object for the
         *   entire task.
         *
         * returns: None
         */

        var task_array = [
            [
                [
                    "1. What’s the least costly appliance in terms of electricity cost?",
                    "VCR",
                    "Radio",
                    "Rechargeable toothbrush",
                    "LCD monitor"
                ],
                [
                    "2. What’s the electricity cost difference between the most costly appliance and the least costly appliance (feel free to use a calculator)?",
                    "210",
                    "158.41",
                    "76.47",
                    "56.65"
                ],
                [
                    "3. Computers cost approximately _____ more times than laptops (in terms of electricity cost; pick the best answer)?",
                    "5",
                    "2",
                    "0.1",
                    "4"
                ],
                [
                    "4. Rank the cost of the following appliance from lowest to highest electricity cost: Cordless phone base station, LCD monitor, Convection microwave, Rechargeable toothbrush.",
                    "Rechargeable toothbrush < LCD monitor < Cordless phone base station < Convection microwave",
                    "Cordless phone base station < LCD monitor < Rechargeable toothbrush < Convection microwave",
                    "Cordless phone base station < LCD monitor < Convection microwave < Rechargeable toothbrush",
                    "Convection microwave < Rechargeable toothbrush < Cordless phone base station < LCD monitor"
                ],
                [
                    "5. Based on the info in this chart only, do you think the average electricity cost of appliances on active standby mode is higher or lower than the average electricity cost of those in passive standby mode?",
                    "yes",
                    "no"
                ],

            ],
            [
                [
                    "1. Which Australian state has the third highest percentage of registered birth in the country?",
                    "Victoria",
                    "New South Wales",
                    "Tasmania",
                    "South Australia"
                ],
                [
                    "2. The number of registered births in <b>New South Wales</b> is approximately equivalent to the combined number of registered births of which two other states? Select the best answer.",
                    "Queensland and Western Australia",
                    "Queensland and Victoria",
                    "Queensland and Tasmania",
                    "South Australia and Western Australia"
                ],
                [
                    "3. The number of registered births in <b>Victoria</b> is approximately equivalent to the combined number of registered births of which two other states? Select the best answer.",
                    "Queensland and Western Australia",
                    "Western Australia and Tasmania",
                    "Queensland and Tasmania",
                    "South Australia and Western Australia"
                ],
                [
                    "4. If we exclude and ignore the data of Western Australia, which state has the <b>second-lowest</b> number of registered births?",
                    "Queensland",
                    "South Australia",
                    "Victoria",
                    "Tasmania"
                ],
                [
                    "5. Which of the following statement is correct?",
                    "The state with the highest number of births has more registered births than all the other states combined",
                    "South Australia has recorded more births than Western Australia in 2012",
                    "Victoria and Queensland combined have recorded less birth than New South Wales in 2012",
                    "None of above"
                ]
            ],
            [

            ],
            [

            ],
            [

            ],
            [

            ],
            [

            ],
            [

            ],
        ];

        $(".exp-data").text("Input for task " + taskInput.toString());

        $('#instructions-demo2').empty();
        console.log("show vis");
        console.log(taskIndex);
        let instructionsIndex = taskIndex;
        let imgEle = "<img class='instructions-img' src='";
        imgEle += config.instructions.images[instructionsIndex] + "'></img>";
        $("#instructions-demo2").append($(imgEle));

        let current_task_bundle = task_array[taskIndex];
        for(let i = 0; i < current_task_bundle.length; ++i)
        {
            let current_question_bundle = current_task_bundle[i];
            let current_question_name = current_question_bundle[0];
            //console.log(current_question_name);
            //console.log($('#questions_box').children().eq(i));
            //console.log($('#questions_box').children().eq(i).find('label').first());
            //console.log($('#questions_box ').children().eq(i).find(".radio"));

            $('#questions_box').children().eq(i).find('label').first().html(current_question_name);
            for(let j = 1; j < current_question_bundle.length; ++j)
            {
                $('#questions_box ').children().eq(i).find(".radio").eq(j-1).find('label').first().html(current_question_bundle[j]);
            }
        }


        //console.log("in showTask");
        //console.log(taskOutput);
        $("#exp-input").val(taskOutput);
        $("#exp-input").focus();
    },
    collectData: function(taskInput, taskIndex, taskOutput) {
        /*
         * This function should return the experiment data for the current task
         * as an object.
         *
         * taskInput - if config.meta.aggregate is false, the object in the array from loadTasks
         *   corresponding to subtask taskIndex; else, the input object from loadTasks
         * taskIndex - the number of the current subtask
         * taskOutput - outputs collected for the subtask taskIndex
         *   If config.meta.aggregate is set to false, this is the results object for the current
         *   subtask. If config.meta.aggregate is set to true, this is the results object for the
         *   entire task.
         *
         * returns: if config.meta.aggregate is false, any object that will be stored as the new
         *   taskOutput for this subtask in the overall array of taskOutputs. If
         *   config.meta.aggregate is true, an object with key-value pairs to be merged with the
         *   taskOutput object.
         */
        console.log(taskInput);
        console.log(taskIndex);
        console.log(taskOutput);
        return $("#exp-input").val();
    },
    validateTask: function(taskInput, taskIndex, taskOutput) {
        /*
         * This function should return an error message if the
         * data stored in taskOutput is not valid (e.g. fully filled out), and
         * a falsey value otherwise
         *
         * taskInput - if config.meta.aggregate is false, the object in the array from loadTasks
         *   corresponding to subtask taskIndex; else, the input object from loadTasks
         * taskIndex - the number of the current subtask
         * taskOutput - outputs collected for the subtask taskIndex
         *   If config.meta.aggregate is set to false, this is the results object for the current
         *   subtask. If config.meta.aggregate is set to true, this is the results object for the
         *   entire task
         *
         * returns: string indicating error message or falsey value
         */
        if (taskOutput.trim().length > 0) {
            return null;
        } else {
            return "please complete the task!";
        }
    }
};
