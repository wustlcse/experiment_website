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
                    "Yes",
                    "No",
                    "Pears",
                    "Grapefruit"
                ],

            ],
            [
                [
                    "1. Based on this visualization, a person who makes 25,000 US dollars in 2010 would be classified in which percentage bracket?",
                    "Top 0.01%",
                    "Top 10% to 5%",
                    "Bottom 90%",
                    "Top 5% to 1%",
                ],
                [
                    "2. Based on this visualization, a person who makes 25,000 US dollars in 2010 would be classified in which percentage bracket?",
                    "Top 0.01%",
                    "Top 10% to 5%",
                    "Bottom 90%",
                    "Top 5% to 1%",
                ],
                [
                    "3. There is an income group with an average income of 30,000 US dollars. Based on this visualization, what percentage of people belong to this group?",
                    "90%",
                    "5%",
                    "50%",
                    "10%"
                ],
                [
                    "4. Rank the following income groups, “Top 0.01%”, “Top 10% to 5%”, “Top 5% to 1%”,  based on each group’s percentage share of the total population.",
                    "Top 0.01%” <  “Top 5% to 1%” < “Top 10% to 5%",
                    "Top 0.01%” <  “Top 10% to 5%” < “Top 5% to 1%",
                    "Top 10% to 5%” <  “Top 0.01%” < “Top 5% to 1%",
                    "Top 5% to 1%” <  “Top 0.01%” < “Top 10% to 5%"
                ],
                [
                    "5. Rank the following income groups, “Top 0.01%”, “Top 10% to 5%”, “Top 5% to 1%”,  based on each’s percentage share of income.",
                    "Top 0.01%” <  “Top 5% to 1%” < “Top 10% to 5%",
                    "Top 10% to 5%” <  “Top 5% to 1%” < “Top 0.01%",
                    "Top 5% to 1%” <  “Top 0.01%” < “Top 10% to 5%",
                    "Top 10% to 5%” <  “Top 0.01%” < “Top 5% to 1%"
                ]
            ],
            [
                [
                    "1. Based on the information from this visualization only, which year has the lowest percentage of female virgins on this college campus?",
                    "1963",
                    "1984",
                    "1978",
                    "1971"
                ],
                [
                    "2. Based on the information from this visualization only, which year has the lowest percentage of male virgins on this college campus?",
                    "1963",
                    "1984",
                    "1978",
                    "1971"
                ],
                [
                    "3. Based on the information from this visualization only, which year has the highest percentage of female and male virgins combined on this college campus?",
                    "1963",
                    "1984",
                    "1978",
                    "1971"
                ],
                [
                    "4. Is it true that in all of the four years reported (namely, 1963, 1971, 1978 and 1984),the percentage of female virgins is higher than that of male virgins?",
                    "apple",
                    "fruit",
                    "yes",
                    "no"
                ],
                [
                    "5. In which year is the gap between male virgin rate and female virgin rate the largest?",
                    "1963",
                    "1984",
                    "1978",
                    "1971"
                ],
            ],
            [
                [
                    "1. Which beer brand is the top beer choice of Texas?",
                    "Bud Light",
                    "Blue Moon",
                    "Yuengling",
                    "Corona"
                ],
                [
                    "2. Which beer brand is the top beer choice of Alaska?",
                    "Bud Light",
                    "Blue Moon",
                    "Yuengling",
                    "Corona"
                ],
                [
                    "3. Which beer brand is not a top beer choice in any of the states in the western part of the United States?",
                    "Bud Light",
                    "Blue Moon",
                    "Yuengling",
                    "Corona"
                ],
                [
                    "4. Which two beer brands are the top choices of Northwestern United States?",
                    "Bud Light and Blue Moon",
                    "Corona and Yuengling",
                    "Yuengling and Samuel Adams ",
                    "Samuel Adams and Corona",

                ],
                [
                    "5. Is it true that Blue Moon is the top choice of more states compared to Corona?",
                    "Yes",
                    "Juice",
                    "No",
                    "Ice"
                ]
            ]
        ];

        $(".exp-data").text("Type \"done\" in the input box to proceed (designed to distinguish participants who are not actually working on the tasks) for task " + taskInput.toString());

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
        if (taskOutput.trim().toLowerCase() === 'done') {
            return null;
        } else {
            return "please complete the task and type \"done\" in the input box!";
        }
    }
};
